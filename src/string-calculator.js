class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.slice(delimiterMatch[0].length);
        }

        const parts = numbers.split(delimiter);
        return parts.reduce((sum, num) => sum + parseInt(num), 0);
    }
}

module.exports = StringCalculator;