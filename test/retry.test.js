const {retry} = require('../src/retry');

function login(type) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (type < 1) {
                resolve({
                    code: Math.random()
                });
            } else {
                reject({
                    msg: 'type is not correct'
                });
            }
        }, 1000);
    });
}

const login0 = retry(login, 0);
login0(1).then(console.log).catch(err => {
    console.error(err);
});
const login3 = retry(login, 3);
login3(1).then(console.log).catch(err => {
    console.error(err);
});
login3(1).then(console.log).catch(err => {
    console.error(err);
});