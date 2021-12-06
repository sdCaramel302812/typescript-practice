function tsFunction() {
    functionType();
    optionalParameter();
    defaultParameter();
    restParameter();
    funcitonOverloading();
}

function functionType() {
    let add1: (a: number, b: number) => number;
    add1 = function (a: number, b: number) {
        return a + b;
    };
    
    let add2: (a: number, b: number) => number = 
        function (a: number, b: number): number {
            return a + b;
        };

    console.log(add1(1, 2));
    console.log();
}

function optionalParameter() {
    function multiply(a:number, b:number, c?:number): number {
        if (c !== undefined) {
            return a * b * c;
        }
        return a * b;
    }
    console.log(multiply(2, 3, 4));
    console.log(multiply(2, 3));
    console.log();
}

function defaultParameter() {
    // default parameter can appear before required parameter
    function getDay(year: number = new Date().getFullYear(), month: number): number {
        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                if (((year % 4 == 0) &&
                    !(year % 100 == 0)) ||
                     (year % 400 == 0)) {
                    return 29;
                } else {
                    return 28;
                }
            default:
                throw Error('Invalid month');
        }
    }

    console.log(getDay(undefined, 2));

    function foo(a: number, b:number = 10) {
        console.log('foo', a + b);
    }
    foo(5);

    function defaultAfterOptional(a: number, b?: number, c: number = 10) {
        console.log('a + c =', a + c);
    }
    defaultAfterOptional(20);

    function defaultBeforeOptional(a: number, b: number = 10, c?: number) {
        if (c !== undefined) {
            console.log(a + b + c);
        }
        console.log(a + b);
    }
    defaultBeforeOptional(1);
    console.log();
}

function restParameter() {
    function getTotal(...numbers: number[]): number {
        let total = 0;
        numbers.forEach((num) => {total += num;});
        return total;
    }
    console.log(getTotal(1, 2, 3, 4, 5, 6));
    console.log();
}

function funcitonOverloading() {
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: any, b: any): any {
        return a + b;
    }
    console.log(add(1, 2));
    console.log(add('1', '2'));

    function sum(a: number, b: number): number;
    function sum(a: number, b: number, c: number): number;
    function sum(a: number, b: number, c?: number): number | void {    
        if (c) {
            return a + b + c;
        }
        return a + b;
    }
    console.log(sum(4, 5));
}

tsFunction();