import FibCalculator from './FibCalculator';

test('expect the correct value to be returned from the FibCalculator function, N=0 to return 0', () => {
    expect(FibCalculator(0)).toBe(0);
});

test('expect the correct value to be returned from the FibCalculator function, N=9 to return 34', () => {
    expect(FibCalculator(9)).toBe(34);
});

test('expect the correct value to be returned from the FibCalculator function, N=11 to return 89', () => {
    expect(FibCalculator(11)).toBe(89);
});

test('expect the correct value to be returned from the FibCalculator function, N=14 to return 377', () => {
    expect(FibCalculator(14)).toBe(377);
});

test('expect the correct value to be returned from the FibCalculator function, N=-1 to return Error: Input value cannot be a negative number, input a number that is above 0', () => {
    expect(FibCalculator(14)).toBe(377);
});


