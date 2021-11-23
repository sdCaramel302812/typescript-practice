function main() {
    numberType();
    stringType();
    booleanType();
    objectType();
    arrayType();
    tupleType();
    enumType();
}

function numberType() {
    // decimal number
    let x: number = 100,
        y: number = 200;

    // binary number
    let bin: number = 0b100;

    // octal number
    let oct: number = 0o100;

    // hexadecimal number
    let hex: number = 0xab;

    // big integer, not support in old javascript
    // let bigi: bigint = 90000000111n;

    console.log('x: ', x, ', y: ', y);
    console.log('binary: ', bin);
    console.log('octal: ', oct);
    console.log('heximal: ', hex);
    console.log();
}

function stringType() {
    let name: string = "john";
    let title: string = 'Web Developer';

    // template string
    let profile: string = `I'm ${name}.
    I'm a ${title}`;

    console.log(profile);
    console.log();
}

function booleanType() {
    let pending: boolean = true;
    console.log('pending: ', pending);
    console.log();
}

function objectType() {
    let employee: object;
    employee = {
        name: 'John',
        age: 25,
        title: 'Web Developer'
    };

    console.log(employee);
    //employee = 'test';    cannot reassign to other type
    //employee.age = 26;    cannot access age because object type doesn't have age property

    // specify property in employees
    let employees: {
        name: string;
        age: number;
        title: string;
    };
    employees = {
        name: 'John',
        age: 25,
        title: 'Web Developer'
    };
    console.log(`${employees.name} is a ${employees.age} years old ${employees.title}`);

    // empty type, can access all properties and methods in Object type
    let empty: {} = {};
    console.log(empty.toString());
}

function arrayType() {
    let skills: string[] = [];
    skills[0] = 'programming';
    skills.push('software design');
    console.log(skills);

    let series: number[] = [1, 2, 3];
    let double = series.map(n => n * 2);
    console.log(double);

    // sotore mixed type in array
    let scores: (string | number)[] = [];
    scores = ['programming', 2];
    console.log(scores);
    console.log();
}

function tupleType() {
    let skill: [string, number];
    skill = ['programming', 5];
    // skill.push(3);           weird behavior
    console.log(skill);

    let color1, color2: [number, number, number, number?];
    color1 = [0, 255, 255, 0.5];
    color2 = [255, 0, 0];
    console.log(color1, color2);
    console.log();
}

// JavaScript doesn't have enum type
function enumType() {
    function isSummer(month: Month): boolean {
        switch(month) {
            case Month.Jun:
            case Month.Jul:
            case Month.Aug:
                return true;
            defalut:
                return false;
        }
    }
    enum Month {
        Jan = 1,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };
    console.log('is summer? ', isSummer(Month.Jun));

    enum ApprovalStatus {
        daft,
        submitted,
        approved,
        rejected
    };
    const request = {
        id: 1,
        status: ApprovalStatus.approved
    };
    if (request.status === ApprovalStatus.approved) {
        console.log('request has been approved');
    }
    console.log();
}

main();