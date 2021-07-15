function create(predict) {
    return function $promisify(initial) {
        return function $(options) {
            if (predict(options)) {
                return initial.call(initial, options);
            } else {
                return new Promise((resolve, reject) => {
                    initial.call(initial, {
                        ...options,
                        success: res => {
                            resolve(res);
                        },
                        fail: err => {
                            reject(err);
                        }
                    });
                });
            }
        }
    }
}

module.exports = create;