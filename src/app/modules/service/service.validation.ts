import { z } from 'zod';

export const createServiceValidation = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.number(),
    isDeleted: z.boolean().default(false),
  })
});

export const ServiceValidations = {
  createServiceValidation
};
