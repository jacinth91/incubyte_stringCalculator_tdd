
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
});
