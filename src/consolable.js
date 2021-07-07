function consolable(promise, prefix = '', stringify = x => x) {
    prefix = typeof prefix === 'function' ? prefix : x => '';
    return promise.then(
        res => {
            console.log(prefix(), stringify(res));
            return res;
        },
        err => {
            console.error(prefix(), stringify(err));
            return Promise.reject(err);
        });
}

module.exports = consolable;