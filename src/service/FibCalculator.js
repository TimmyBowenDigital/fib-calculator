
function fibCalculator(inputValue) {
    let a = 1, b = 0, temp;

    while (inputValue > 0) {
        temp = a;
        a = a + b;
        b = temp;
        inputValue--;
    }

    return b;
}

export default fibCalculator;