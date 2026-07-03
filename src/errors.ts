/** SDK error types mirroring common API failure modes. */

export class CisoAssistantError extends Error {
  constructor(
    message: string,
    readonly statusCode?: number,
    readonly body?: unknown,
  ) {
    super(message);
    this.name = 'CisoAssistantError';
  }
}

export class AuthError extends CisoAssistantError {
  constructor(message: string, statusCode?: number, body?: unknown) {
    super(message, statusCode, body);
    this.name = 'AuthError';
  }
}

export class UnauthorizedError extends AuthError {
  constructor(message: string, statusCode?: number, body?: unknown) {
    super(message, statusCode, body);
    this.name = 'UnauthorizedError';
  }
}

export class MissingParameterError extends CisoAssistantError {
  constructor(message: string) {
    super(message);
    this.name = 'MissingParameterError';
  }
}

export class ParameterError extends CisoAssistantError {
  constructor(message: string) {
    super(message);
    this.name = 'ParameterError';
  }
}
