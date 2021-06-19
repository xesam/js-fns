const last = require('../src/last');

let i = 0;

function get() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(i++);
        }, 1000);
    })
}

const lastGet = last(get);

lastGet().then(console.log);
lastGet().then(console.log);
lastGet().then(console.log);
lastGet().then(console.log);