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

});

