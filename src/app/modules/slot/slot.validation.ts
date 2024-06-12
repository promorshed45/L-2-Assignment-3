import { z } from 'zod';

export const createSlotValidation = z.object({
  body: z.object({
    service: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format"
    }),
    startTime: z.string(),
    endTime: z.string(),
    isBooked: z.enum(['available', 'booked', 'canceled']),
  })
});

export const SlotValidations = {
  createSlotValidation
};