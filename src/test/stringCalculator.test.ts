
import {add} from '../stringCalculator';


describe('StringCalculator', () => {
    it('should return 0 when input is an empty string', () => {
      expect(add('')).toBe(0);
    });
    it('should return the value of a single number', () => {
      expect(add('1')).toBe(1);
    });
    it('should return the sum of two comma-separated numbers', () => {
      expect(add('1,5')).toBe(6);
    });
    it('should handle multiple numbers separated by commas', () => {
      expect(add('1,2,3,4')).toBe(10);
      expect(add('1,2')).toBe(3);
      expect(add('2,2,2')).toBe(6);
    });
    it('should handle newlines (e.g., "1\\n2,3")', () => {
      expect(add('1\n2,3')).toBe(6);
    });
    it('should support custom delimiters are declared (e.g. "//;\\n1;2")', () => {
    expect(add('//;\n1;2')).toBe(3);
});
it('should throw an error if there is a negative number', () => {
  expect(() => add('1,-2')).toThrow('negative numbers not allowed -2');
});

it('should throw an error listing all negative numbers if multiple exist', () => {
  expect(() => add('1,-2,-3,4')).toThrow('negative numbers not allowed -2, -3');
});
});
