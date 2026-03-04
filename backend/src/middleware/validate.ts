import { ZodSchema } from 'zod';
import { NextFunction, Request, Response } from 'express';

export function validateBody<T>(schema: ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: 'Validation failed',
        issues: result.error.flatten()
      });
    }

    req.body = result.data;
    next();
  };
}
