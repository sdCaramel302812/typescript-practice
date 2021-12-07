function interface() {
    propertyInterface();
    functionInterface();
    classInterface();
    extendingInterface();
    moreExtendingInterface();
}

function propertyInterface() {
    interface Person {
        readonly ssn?: string,
        firstName: string,
        middleName: string,
        lastName: string
    }
    
    function getFullName(person: Person) {
        if (person.middleName) {
            return `${person.firstName} ${person.middleName} ${person.lastName}`
        }
        return `${person.firstName} ${person.lastName}`;
    }
    
    // can contain properties that doesn't define in interface
    let john = {
        ssn: '171-28-0926',
        firstName: 'John',
        middleName: 'K.',
        lastName: 'Doe',
        age: 22
    };
    
    // but if definde object as Person type, it cannot contain properties that doesn't define in interface
    /*let john: Person = {
        ssn: '171-28-0926',
        firstName: 'John',
        middleName: 'K.',
        lastName: 'Doe',
        age: 22             // invalid
    };*/
    
    console.log(getFullName(john));
    console.log();
}

function functionInterface() {
    interface StringFormat {
        (str: string, isUpper: boolean): string
    }
    let format: StringFormat;
    // parameter's name no need to match function signature
    format = function (str: string, upper: boolean): string {
        return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    };
    console.log(format('hi', true));

    let lowerCase: StringFormat;
    // no need to have all parameter
    lowerCase = function (str: string): string {
        return str.toLocaleLowerCase();
    }
    // but still need to pass two arguments
    console.log(lowerCase('Hi', false));
    console.log();
}

function classInterface() {
    interface Json {
        toJson(): string
    }

    class Person {
        constructor(private firstName: string,
            private lastName: string) {
        }
        // property name cannot be 'toJSON' if it will be called by JSON.stringify. It will cause infinity loop
        toJson(): string {
            return JSON.stringify(this);
        }
    }

    let person = new Person('John', 'Doe');
    console.log(person.toJson());
}

function extendingInterface() {
    interface Mailable {
        send(email: string): boolean
        queue(email: string): boolean
    }
    class SomeClass implements Mailable {
        send(email: string): boolean {
            // do something
            return true;
        }
        queue(email: string): boolean {
            // do something
            return true;
        }
    }
    // when you want to extend an interface but don't want to break previous code
    interface FutureMailable extends Mailable {
        later(email: string, after: number): boolean
    }
    class Mail implements FutureMailable {
        send(email: string): boolean {
            // do something
            return true;
        }
        queue(email: string): boolean {
            // do something
            return true;
        }
        later(email: string, after: number): boolean {
            // do something
            return true;
        }
    }
}

function moreExtendingInterface() {
    interface A {
        a(): void
    }
    interface B {
        b(): void
    }
    // interface can extend multiple interface
    interface C extends A, B {
        c(): void
    }

    class Control {
        private state: boolean;
    }
    class SubControl extends Control {

    }
    // interface can extend class, and will have all properties (include private properties)
    interface StatefulControl extends Control {
        enable(): void
    }
    // only class or subclass from which the interface extends could implement the interface
    class Button extends SubControl implements StatefulControl {
        enable() {}
    }
    let btn = new Button();
    btn.enable();
}

interface();