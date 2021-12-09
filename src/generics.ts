function generics() {
    genericsFunction();
    genericsWithTwoTypes();
    genericsConstraint();
    genericsInterface();
}

function genericsFunction() {
    function getRandomElement<T>(items: T[]): T {
        let i = Math.floor(Math.random() * items.length);
        return items[i];
    }
    let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
    console.log(getRandomElement(arr));
    console.log();
}

function genericsWithTwoTypes() {
    function merge<U, V>(obj1: U, obj2: V): U & V {
        return {
            ...obj1, 
            ...obj2
        }
    }
    let obj1 = {
        name: 'John'
    }
    let obj2 = {
        age: 12
    }
    let obj3 = merge(obj1, obj2);
    console.log(obj3);
    console.log();
}

function genericsConstraint() {
    // let the function ony accept object
    function merge<U extends object, V extends object>(obj1: U, obj2: V): U & V {
        return {
            ...obj1, 
            ...obj2
        }
    }
    // error because 12 is not an object
    // let obj3 = merge({ name: 'John' }, 12);

    // define K is key of T
    function prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    // OK
    console.log(prop({ name: 'John'}, 'name'));
    // error, age is not a key of the object
    // let str = prop({ name: 'John'}, 'age');

    console.log();
}

function genericsInterface() {
    interface Pair<K, V> {
        key: K,
        value: V
    }
    let month: Pair<string, number> = {
        key: 'Jan',
        value: 1
    }
    console.log(month);

    // generics interface with method
    interface Collection<T> {
        add(o: T): void;
        remove(o: T): void;
    }
    class List<T> implements Collection<T> {
        private items: T[] = [];
        add(o: T) {
            this.items.push(o);
        }
        remove(o: T) {
            let i = this.items.indexOf(o);
            if (i > -1) {
                this.items.splice(i, 1);
            }
        }
    }
    let list = new List<number>();
    for (let i = 0; i < 10; i++) {
        list.add(i);
    }
    list.remove(4);
    console.log(list);

    // generics interface that describe index type
    interface Options<T> {
        [name: string]: T
    }
    let opt: Options<boolean> = {
    //    1: true,     // index type error
        '1': false
    }
}


generics();