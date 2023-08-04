// CustomError.ts
class CustomError extends Error {
    constructor(message: string, public code: number) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  export default CustomError;
  