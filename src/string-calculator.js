class StringCalculator {
    add(numbers) {
        return numbers === "" ? 0 : parseInt(numbers);
    }
}

module.exports = StringCalculator;