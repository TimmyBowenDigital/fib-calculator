import calculateFibAt from './CalculateFibAt';

const tests = [
    {input: 'Timmy', expected: 0},
    {input: '0', expected: 0},
    {input: '-1', expected: 0},
    {input: '1', expected: 1},
    {input: '2', expected: 1},
    {input: '3', expected: 2},
    {input: '4', expected: 3},
    {input: '5', expected: 5},
    {input: '6', expected: 8},
    {input: '7', expected: 13},
    {input: '8', expected: 21},
    {input: '9', expected: 34},
    {input: '10', expected: 55},
    {input: '100', expected: 354224848179262000000},
    {input: '1000', expected: 4.346655768693743e+208},
    {input: '5000', expected: Infinity},
];

describe('FibCalculator', () => {
    tests.forEach( t => {
        test(`expect ${t.expected} to be returned for input ${t.input}`, () => {
            expect(calculateFibAt(t.input)).toBe(t.expected);
        })
    });
});

