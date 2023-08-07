// CustomError.ts
export class CustomError extends Error {
    constructor(message: string, public code: number) {
      super(message);
      this.name = 'CustomError';
    }
}

export class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UserNotFoundError';
  }
}  