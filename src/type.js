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
    var x = 100, y = 200;
    // binary number
    var bin = 4;
    // octal number
    var oct = 64;
    // hexadecimal number
    var hex = 0xab;
    // big integer, not support in old javascript
    // let bigi: bigint = 90000000111n;
    console.log('x: ', x, ', y: ', y);
    console.log('binary: ', bin);
    console.log('octal: ', oct);
    console.log('heximal: ', hex);
    console.log();
}
function stringType() {
    var name = "john";
    var title = 'Web Developer';
    // template string
    var profile = "I'm ".concat(name, ".\n    I'm a ").concat(title);
    console.log(profile);
    console.log();
}
function booleanType() {
    var pending = true;
    console.log('pending: ', pending);
    console.log();
}
function objectType() {
    var employee;
    employee = {
        name: 'John',
        age: 25,
        title: 'Web Developer'
    };
    console.log(employee);
    //employee = 'test';    cannot reassign to other type
    //employee.age = 26;    cannot access age because object type doesn't have age property
    // specify property in employees
    var employees;
    employees = {
        name: 'John',
        age: 25,
        title: 'Web Developer'
    };
    console.log("".concat(employees.name, " is a ").concat(employees.age, " years old ").concat(employees.title));
    // empty type, can access all properties and methods in Object type
    var empty = {};
    console.log(empty.toString());
}
function arrayType() {
    var skills = [];
    skills[0] = 'programming';
    skills.push('software design');
    console.log(skills);
    var series = [1, 2, 3];
    var double = series.map(function (n) { return n * 2; });
    console.log(double);
    // sotore mixed type in array
    var scores = [];
    scores = ['programming', 2];
    console.log(scores);
    console.log();
}
function tupleType() {
    var skill;
    skill = ['programming', 5];
    // skill.push(3);           weird behavior
    console.log(skill);
    var color1, color2;
    color1 = [0, 255, 255, 0.5];
    color2 = [255, 0, 0];
    console.log(color1, color2);
    console.log();
}
// JavaScript doesn't have enum type
function enumType() {
    function isSummer(month) {
        switch (month) {
            case Month.Jun:
            case Month.Jul:
            case Month.Aug:
                return true;
                defalut: return false;
        }
    }
    var Month;
    (function (Month) {
        Month[Month["Jan"] = 1] = "Jan";
        Month[Month["Feb"] = 2] = "Feb";
        Month[Month["Mar"] = 3] = "Mar";
        Month[Month["Apr"] = 4] = "Apr";
        Month[Month["May"] = 5] = "May";
        Month[Month["Jun"] = 6] = "Jun";
        Month[Month["Jul"] = 7] = "Jul";
        Month[Month["Aug"] = 8] = "Aug";
        Month[Month["Sep"] = 9] = "Sep";
        Month[Month["Oct"] = 10] = "Oct";
        Month[Month["Nov"] = 11] = "Nov";
        Month[Month["Dec"] = 12] = "Dec";
    })(Month || (Month = {}));
    ;
    console.log(isSummer(Month.Jun));
}
main();
