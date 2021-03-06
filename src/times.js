function units(milliseconds) {
    if (milliseconds < 0) {
        throw new Error('milliseconds < 0, milliseconds=' + milliseconds);
    }
    const millisecond = milliseconds % 1000;
    const seconds = Math.floor(milliseconds / 1000);
    const second = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    const minute = minutes % 60;
    const hours = Math.floor(minutes / 60);
    const hour = hours % 24;
    const days = Math.floor(hours / 24);
    const day = days % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
    };
}

exports.units = units;