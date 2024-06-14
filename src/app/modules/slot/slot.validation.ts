import { z } from 'zod';

export const createSlotValidation = z.object({
  body: z.object({
    service: z.string().optional(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format"
    }),
    startTime: z.string(),
    endTime: z.string(),
    isBooked: z.enum(['available', 'booked', 'canceled']).optional(),
  })
});

export const SlotValidations = {
  createSlotValidation
};
