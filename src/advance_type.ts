function advanceType() {
    intersectionType();
    typeGuard();
    typeCasting();
    typeAssertion();
}

function intersectionType() {
    interface Identity {
        id: number;
        name: string;
    }
    
    interface Contact {
        email: string;
        phone: string;
    }
    type Employee = Identity & Contact;

    // intersection type will contain all properties from Identity and Contact
    let e: Employee = {
        id: 123,
        name: 'John',
        email: 'john@example.com',
        phone: '123456789'
    };

}

function typeGuard() {
    class A { name: string }
    class B { alias: string }
    type typeAB = A | B;
    function isTypeA(a: typeAB): boolean {
        // right hand side should be an object
        // left hand side should be any type or object
        if (a instanceof A) {
            return true;
        } else {
            return false;
        }
    }
    let a = new A();
    console.log('A is type A: ', isTypeA(a));

    function hasName(a: typeAB): boolean {
        if ('name' in a) {
            return true;
        } else {
            return false;
        }
    }
    let b = new B();
    console.log('B has name: ', hasName(b));

    // user define type guard
    function isTypeB(b: any): b is B {
        return b instanceof B;
    }
    console.log('B is type B: ', isTypeB(b));
    console.log();
}

// use type casting to downcast or upcast a class
function typeCasting() {
    // because return type Element doesn't has value property, downcast to HTMLInputElement type
    // node doesn't has document
    // two ways of type casting
    // let input = document.querySelector('input[type="text"]') as HTMLInputElement;
    // let input = <HTMLInputElement>document.querySelector('input[type="text"]');
    // console.log(input.value);
}

// tell compiler what type is it
function typeAssertion() {
    function getNetPrice(price: number, discount: number, format: boolean): number | string {
        let netPrice = price * (1 - discount);
        return format ? `${netPrice}` : netPrice;
    }
    console.log(<string>getNetPrice(100, 0.5, true));
    console.log(getNetPrice(100, 0.5, false) as number);
}

advanceType();
