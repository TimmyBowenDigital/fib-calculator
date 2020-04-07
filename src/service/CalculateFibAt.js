
const calculateFibAt = (inputValue, memo = {}) => {
    if (memo[inputValue]) {
        return memo[inputValue]
    }
    if (isNaN(inputValue) || inputValue < 1)
        return 0;
    if (inputValue <= 2)
        return 1;
    return memo[inputValue] = calculateFibAt(inputValue - 1, memo) + calculateFibAt(inputValue - 2, memo);
};

export default calculateFibAt;