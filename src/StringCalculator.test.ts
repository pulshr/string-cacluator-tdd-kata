import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {

  //1st Step Test  
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("")).toBe(0);
  });

  //2nd Step Test
  it('should return the number itself if only one number is provided', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1")).toBe(1);
  });

  //3rd Step Test
  it('should return the sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1,2")).toBe(3);
  });

  //4th Step Test
  it('should return the sum of an unknown amount of numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1,2,3,4,5")).toBe(15);
  });

  //5th Step Test
  it('should handle new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1\n2,3")).toBe(6);
  });

  //6th Step Test
  it('should support different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("//;\n1;2")).toBe(3);
  });

  //7th Step Test
  it('should throw an exception when negatives are provided', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.Add("1,-2,3")).toThrow("negatives not allowed: -2");
  });
  
  //8th Step Test
  it('should ignore numbers greater than 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("2,1001")).toBe(2);
  });
  
  //9th Step Test
  it('should support delimiters of any length', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("//[***]\n1***2***3")).toBe(6);
  });  

  //10th Step Test
  it('should support multiple delimiters with any length', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("//[***][%%]\n1***2%%3")).toBe(6);
  });  

});

