export class StringCalculator {
    public Add(numbers: string): number {
      if (numbers === "") return 0;
  
      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        const customDelimiterMatch = parts[0].match(/\[(.*?)\]/);
        if (customDelimiterMatch) {
          const customDelimiter = customDelimiterMatch[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          delimiter = new RegExp(customDelimiter);
        } else {
          delimiter = new RegExp(parts[0][2].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        }
        numbers = parts[1];
      }
  
      const numbersArray = numbers.split(delimiter).map(Number);
      const negatives = numbersArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
      }
  
      return numbersArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }
  }
  