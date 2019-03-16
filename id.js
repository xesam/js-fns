function testId(id) {
    let format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
    if (!format.test(id)) {
        return {'status': 1};
    }
    let year = id.substr(6, 4),
        month = id.substr(10, 2),
        date = id.substr(12, 2),
        time = Date.parse(month + '-' + date + '-' + year),
        now_time = Date.parse(new Date()),
        dates = (new Date(year, month, 0)).getDate();
    if (time > now_time || date > dates) {
        return {'status': 1}
    }
    let c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let id_array = id.split("");
    let sum = 0;
    for (let k = 0; k < 17; k++) {
        sum += parseInt(id_array[k]) * parseInt(c[k]);
    }
    if (id_array[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
        return {'status': 1}
    }
    return {'status': 0}
}

export default {
    testId
}
