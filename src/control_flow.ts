function controlFlow() {
    ternary();
}

function ternary() {
    const max = 100
    let counter = 100;
    const res = counter < max ? counter++ : counter = 1;
    console.log('counter:', counter, 'result:', res);
}

controlFlow();