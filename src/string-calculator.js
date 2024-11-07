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
        const negatives = parts.filter(num => parseInt(num) < 0);

        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return parts.reduce((sum, num) => sum + (parseInt(num) <= 1000 ? parseInt(num) : 0), 0);
    }
}

module.exports = StringCalculator;