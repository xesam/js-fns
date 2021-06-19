const once = require('../src/once');

function login(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (success) {
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

function exchange({code}) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (code > 0.5) {
                resolve({
                    openid: Math.random()
                });
            } else {
                reject({
                    msg: 'code is not correct'
                });
            }
        }, 1000);
    });
}

const onceLogin = once(login);
const onceExchange = once(function () {
    return onceLogin(false).then(exchange);
})

function auth({id}) {
    return onceExchange().then(({openid}) => {
        return {
            openid,
            userid: id
        };
    })
}

auth({id: 100}).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});