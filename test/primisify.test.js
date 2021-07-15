const create = require('../src/primisify');

function predict(options = {}) {
    return options.success || options.fail || options.complete;
}

const promisify = create(predict);

function oldFn(options) {
    options.success({name: 'xesam'});
}

oldFn({
    success(data) {
        console.log(data);
    }
});

const newFn = promisify(oldFn);
newFn().then(console.log);
newFn({
    success(data) {
        console.log(data);
    }
});