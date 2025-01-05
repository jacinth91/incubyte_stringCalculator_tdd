
import {add} from '../stringCalculator';


describe('StringCalculator', () => {
    it('should return 0 when input is an empty string', () => {
      expect(add('')).toBe(0);
    });
});