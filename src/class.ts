function tsClass() {
    classBeforeEC6();
    EC6Class();
    accessModifier();
    readonlyProperty();
    inheritance();
    staticPropertiesAndMethods();
    abstractClass();
}

function classBeforeEC6() {
    function Person(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    Person.prototype.getFullName = function(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    
    let person = new Person('171-28-0926','John','Doe');
    console.log(person.getFullName());
    console.log();
}

function EC6Class() {
    class Person {
        ssn: string;
        firstName: string;
        lastName: string;

        constructor(ssn: string, firstName: string, lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    let person = new Person('171-28-0926','John','Doe');
    console.log(person.getFullName());
    console.log();
}

function accessModifier() {
    class Person {
        // default is public
        ssn: string;
        // can be access by same class or subclass
        protected firstName: string;
        private lastName: string;

        constructor(ssn: string, firstName: string, lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        public getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    let person = new Person('171-28-0926', 'John', 'Doe');
    console.log(person.ssn);
    // console.log(person.firstName);   invalid
    // console.log(person.lastName);    invalid
    console.log();
}

function readonlyProperty() {
    class Person {
        readonly birthDate: Date;
    
        constructor(birthDate: Date) {
            this.birthDate = birthDate;
        }
    }
    let person = new Person(new Date(1990, 12, 25));

    /**
     * difference between readonly and const
     * 
     * readonly             const
     * class properties     variables
     * init in constructor  init in declaration
     */
}

function inheritance() {
    class Person {
        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        describe(): string {
            return `This is ${this.firstName} ${this.lastName}.`;
        }
    }

    class Employee extends Person {
        constructor(
            firstName: string,
            lastName: string,
            private jobTitle: string) {
            
            // call the constructor of the Person class:
            super(firstName, lastName);
        }
        describe(): string {
            return super.describe() + `I'm a ${this.jobTitle}`;
        }
    }

    let person = new Employee('John','Doe', 'Software Engineer');
    console.log(person.describe());
    console.log();
}

function staticPropertiesAndMethods() {
    class Employee {
        private static headcount: number = 0;
    
        constructor(
            private firstName: string,
            private lastName: string,
            private jobTitle: string) {
    
            Employee.headcount++;
        }

        public static getHeadcount(): number {
            return this.headcount;
        }
    }

    let person = new Employee('John','Doe', 'Software Engineer');
    console.log('headcount', Employee.getHeadcount());
    console.log();
}

function abstractClass() {
    abstract class Employee {
        // parameter will be automatically recognized as class properties
        constructor(private firstName: string, private lastName: string) {
        }
        abstract getSalary(): number
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        compensationStatement(): string {
            return `${this.fullName} makes ${this.getSalary()} a month.`;
        }
    }

    class FullTimeEmployee extends Employee {
        constructor(firstName: string, lastName: string, private salary: number) {
            super(firstName, lastName);
        }
        getSalary(): number {
            return this.salary;
        }
    }

    // cannot instatiate directly
    // let person = new Employee('John','Doe');
    let person = new FullTimeEmployee('John','Doe', 100000);
    console.log(person.getSalary());
    console.log(person.compensationStatement());
    console.log();
}

tsClass();
