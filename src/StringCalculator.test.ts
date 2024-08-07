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
  

});

