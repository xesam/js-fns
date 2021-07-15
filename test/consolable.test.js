const consolable = require('../src/consolable');

consolable(Promise.resolve({
    name: 'xesam'
})).then(console.log).catch(console.error);

Promise.resolve({msg: 'd'}).then(consolable.resolve, consolable.reject).then(console.log).catch(console.error);

const c = consolable.create(consolable.format('high', JSON.stringify));

Promise.resolve({msg: 'd'}).then(c.resolve, c.reject).then(console.log).catch(console.error);
