const rmb = require('../src/rmb');

describe('test', () => {
    it('normal', () => {
        const yuan = rmb.fen(999);
        expect(yuan).toBe('9.99');
    });
});