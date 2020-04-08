
const calculateFibAt = (inputValue, cache = {}) => {
    if (cache[inputValue]) {
        return cache[inputValue]
    }
    if (isNaN(inputValue) || inputValue < 1)
        return 0;
    if (inputValue <= 2)
        return 1;
    return cache[inputValue] = calculateFibAt(inputValue - 1, cache) + calculateFibAt(inputValue - 2, cache);
};

export default calculateFibAt;