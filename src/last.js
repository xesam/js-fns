function last(fn) {
    function _fn() {
        const fnSeq = ++_fn.seq;
        return new Promise((resolve, reject) => {
            fn.apply(fn, arguments).then(res => {
                if (fnSeq === _fn.seq) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    _fn.seq = 0;
    return _fn;
}

module.exports = last;