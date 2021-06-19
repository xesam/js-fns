function retry(fn, retries = 0) {
    return function () {
        const args = arguments;
        return new Promise((resolve, reject) => {
            function attempt(fn, retryCount) {
                fn.apply(fn, args).then(res => {
                    resolve(res);
                }).catch(err => {
                    if (retryCount < retries) {
                        attempt(fn, retryCount + 1);
                    } else {
                        reject(err);
                    }
                });
            }

            attempt(fn, 0);
        });
    }
}

module.exports = retry;