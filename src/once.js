function create(doIt) {
    let flyPromise = null;
    return function () {
        if (flyPromise) {
            return flyPromise;
        } else {
            return flyPromise = doIt.apply(doIt, arguments).catch(err => {
                flyPromise = null;
                return Promise.reject(err);
            });
        }
    }
}

module.exports = create;