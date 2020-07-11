const times = require('../src/times');

describe('test', () => {
    it('normal', () => {
        const milli = 4 * 60 * 60 * 1000;
        const units = times.units(milli);
        expect(units.day).toBe(0);
        expect(units.hour).toBe(4);
        expect(units.minute).toBe(0);
        expect(units.second).toBe(0);
        expect(units.millisecond).toBe(0);
    });
    it('negative throw error', () => {
        const milli = -1000;
        expect(() => times.units(milli)).toThrow();
    });
});