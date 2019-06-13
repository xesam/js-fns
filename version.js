function parseVersion(version) {
    return version.split('.').map(element => {
        return parseInt(element, 10);
    });
}

function compareVersion(left, right) {
    let leftVersions = parseVersion(left);
    let rightVersions = parseVersion(right);
    let maxLen = Math.max(leftVersions.length, rightVersions.length);
    for (let i = 0; i < maxLen; i++) {
        let cmp = (leftVersions[i] || 0) - (rightVersions[i] || 0);
        if (cmp > 0) {
            return 1;
        } else if (cmp < 0) {
            return -1;
        }
    }
    return 0;
}

export default {
    compareVersion
};
