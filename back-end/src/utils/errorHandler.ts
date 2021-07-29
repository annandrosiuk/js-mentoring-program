import { Response } from 'express';

export function errorHandler(
  message: string,
  response: Response,
  code = 500,
  // eslint-disable-next-line @typescript-eslint/ban-types
  error?: Object | string,
): void {
  if (error) {
    console.error(error);
  }

  response.status(code).json({ status: message });
  response.end();
}
