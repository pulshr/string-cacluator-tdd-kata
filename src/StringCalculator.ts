export class StringCalculator {
    public Add(numbers: string): number {
      if (numbers === "") return 0;
  
      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        delimiter = new RegExp(parts[0][2]);
        numbers = parts[1];
      }
  
      const numbersArray = numbers.split(delimiter).map(Number);
      const negatives = numbersArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
      }
  
      return numbersArray.reduce((sum, num) => sum + num, 0);
    }
  }
  