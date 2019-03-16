function padding(current, length, prefix) {
    if (String(current).length >= length) {
        return String(current);
    }
    return padding(prefix + current, length, prefix);
}

export default {
    padding
}
