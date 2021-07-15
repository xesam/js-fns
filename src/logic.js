const and = (a, b) => {
    return a && b;
};

const or = (a, b) => {
    return a || b;
};

const not = a => {
    return !a;
};

exports.and = and;
exports.or = or;
exports.not = not;