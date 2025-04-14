import { 
  isValidString, 
  sanitizeString, 
  isValidEmail, 
  isValidNumber,
  validateData
} from '@/lib/validation';

describe('Validation Utilities', () => {
  describe('isValidString', () => {
    it('returns true for valid strings', () => {
      expect(isValidString('Hello')).toBe(true);
      expect(isValidString('123')).toBe(true);
      expect(isValidString(' with spaces ')).toBe(true);
    });

    it('returns false for empty strings or whitespace', () => {
      expect(isValidString('')).toBe(false);
      expect(isValidString('   ')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isValidString(null)).toBe(false);
      expect(isValidString(undefined)).toBe(false);
      expect(isValidString(123)).toBe(false);
      expect(isValidString({})).toBe(false);
      expect(isValidString([])).toBe(false);
    });
  });

  describe('sanitizeString', () => {
    it('removes control characters', () => {
      expect(sanitizeString('Hello\u0000World')).toBe('HelloWorld');
      expect(sanitizeString('Text\u0001With\u0002Control\u0003Chars')).toBe('TextWithControlChars');
    });

    it('trims whitespace', () => {
      expect(sanitizeString('  Hello  ')).toBe('Hello');
      expect(sanitizeString('\t\nTest\r\n')).toBe('Test');
    });

    it('returns the same string if already clean', () => {
      expect(sanitizeString('Clean text')).toBe('Clean text');
    });
  });

  describe('isValidEmail', () => {
    it('returns true for valid email formats', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('name.surname@domain.co.uk')).toBe(true);
      expect(isValidEmail('user123@test-domain.org')).toBe(true);
    });

    it('returns false for invalid email formats', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('missing@tld')).toBe(false);
      expect(isValidEmail('@nodomain.com')).toBe(false);
      expect(isValidEmail('no@domain@com')).toBe(false);
      expect(isValidEmail('spaces in@domain.com')).toBe(false);
    });
  });

  describe('isValidNumber', () => {
    it('returns true for valid numbers within range', () => {
      expect(isValidNumber(5, 0, 10)).toBe(true);
      expect(isValidNumber(0, 0, 10)).toBe(true);
      expect(isValidNumber(10, 0, 10)).toBe(true);
      expect(isValidNumber(-5, -10, 0)).toBe(true);
    });

    it('returns false for numbers outside range', () => {
      expect(isValidNumber(11, 0, 10)).toBe(false);
      expect(isValidNumber(-1, 0, 10)).toBe(false);
    });

    it('returns false for non-number values', () => {
      expect(isValidNumber('123' as any)).toBe(false);
      expect(isValidNumber(null)).toBe(false);
      expect(isValidNumber(undefined)).toBe(false);
      expect(isValidNumber(NaN)).toBe(false);
      expect(isValidNumber({} as any)).toBe(false);
    });

    it('uses default min/max if not provided', () => {
      expect(isValidNumber(Number.MAX_SAFE_INTEGER - 1)).toBe(true);
      expect(isValidNumber(Number.MIN_SAFE_INTEGER + 1)).toBe(true);
    });
  });

  describe('validateData', () => {
    const schema = {
      name: isValidString,
      email: (value: unknown) => isValidString(value) && isValidEmail(value as string),
      age: (value: unknown) => isValidNumber(value as number, 0, 120),
    };

    it('returns valid=true for valid data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
      };

      const result = validateData(validData, schema);
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it('returns errors for invalid data', () => {
      const invalidData = {
        name: '',
        email: 'not-an-email',
        age: -5
      };

      const result = validateData(invalidData, schema);
      expect(result.valid).toBe(false);
      expect(Object.keys(result.errors).length).toBe(3);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.age).toBeDefined();
    });

    it('handles missing fields', () => {
      const partialData = {
        name: 'John Doe'
        // email and age missing
      };

      const result = validateData(partialData, schema);
      expect(result.valid).toBe(false);
      expect(Object.keys(result.errors).length).toBe(2);
    });
  });
}); 