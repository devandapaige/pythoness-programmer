import { 
  logError, 
  isError, 
  getSafeErrorMessage, 
  tryCatch, 
  tryCatchSync 
} from '@/lib/errorHandling';

// Mock console.error to prevent actual logging during tests
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe('Error Handling Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('logError', () => {
    it('logs error message with context', () => {
      const message = 'Test error message';
      const error = new Error('Test error');
      const context = { id: 123, user: 'test' };
      
      logError(message, error, context);
      
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining(message),
        expect.objectContaining({
          error,
          context,
          timestamp: expect.any(String)
        })
      );
    });
    
    it('handles missing context', () => {
      const message = 'Test error message';
      const error = new Error('Test error');
      
      logError(message, error);
      
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining(message),
        expect.objectContaining({
          error,
          timestamp: expect.any(String)
        })
      );
      // Context should not be in the logged object
      expect(console.error).not.toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ context: expect.anything() })
      );
    });
  });
  
  describe('isError', () => {
    it('returns true for Error objects', () => {
      expect(isError(new Error())).toBe(true);
      expect(isError(new TypeError())).toBe(true);
      expect(isError(new RangeError())).toBe(true);
    });
    
    it('returns false for non-Error values', () => {
      expect(isError('string error')).toBe(false);
      expect(isError(null)).toBe(false);
      expect(isError(undefined)).toBe(false);
      expect(isError(123)).toBe(false);
      expect(isError({ message: 'Fake error' })).toBe(false);
    });
  });
  
  describe('getSafeErrorMessage', () => {
    it('extracts message from Error objects', () => {
      const errorMsg = 'Error message';
      expect(getSafeErrorMessage(new Error(errorMsg))).toBe(errorMsg);
    });
    
    it('returns string errors as-is', () => {
      const stringError = 'String error';
      expect(getSafeErrorMessage(stringError)).toBe(stringError);
    });
    
    it('returns fallback for other error types', () => {
      expect(getSafeErrorMessage(null)).toBe('An unknown error occurred');
      expect(getSafeErrorMessage(undefined)).toBe('An unknown error occurred');
      expect(getSafeErrorMessage(123)).toBe('An unknown error occurred');
      expect(getSafeErrorMessage({})).toBe('An unknown error occurred');
    });
  });
  
  describe('tryCatch', () => {
    it('returns function result when successful', async () => {
      const result = await tryCatch(
        async () => 'success',
        'Function failed'
      );
      
      expect(result).toBe('success');
      expect(console.error).not.toHaveBeenCalled();
    });
    
    it('logs error and returns null when function fails', async () => {
      const errorMsg = 'Function error';
      const result = await tryCatch(
        async () => { throw new Error(errorMsg); },
        'Function failed'
      );
      
      expect(result).toBeNull();
      expect(console.error).toHaveBeenCalled();
    });
    
    it('passes context to logError', async () => {
      const context = { id: 123 };
      await tryCatch(
        async () => { throw new Error('Test error'); },
        'Function failed',
        context
      );
      
      expect(console.error).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          context
        })
      );
    });
  });
  
  describe('tryCatchSync', () => {
    it('returns function result when successful', () => {
      const result = tryCatchSync(
        () => 'success',
        'Function failed'
      );
      
      expect(result).toBe('success');
      expect(console.error).not.toHaveBeenCalled();
    });
    
    it('logs error and returns null when function fails', () => {
      const errorMsg = 'Function error';
      const result = tryCatchSync(
        () => { throw new Error(errorMsg); },
        'Function failed'
      );
      
      expect(result).toBeNull();
      expect(console.error).toHaveBeenCalled();
    });
  });
}); 