const create = function (f) {
    function $(promise) {
        return promise.then($.resolve, $.reject);
    }

    $.create = create;

    $.resolve = function (res) {
        const data = f(res);
        console.log(data.prefix, data.content);
        return res;
    }
    $.reject = function (err) {
        const data = f(err);
        console.error(data.prefix, data.content);
        return Promise.reject(err);
    }
    $.format = format;

    return $;
}

function format(prefix = '', stringify = x => x) {
    const getPrefix = typeof prefix === 'function' ? prefix : x => prefix;
    return function (data) {
        return {
            prefix: getPrefix(data),
            content: stringify(data)
        }
    }
}

module.exports = create(format());