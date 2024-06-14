import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { slotService } from './slot.service';

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await slotService.createSlotIntoDB(req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Slots created successfully",
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req: Request, res: Response) => {
  const { date, serviceId } = req.query;

  const availableSlots = await slotService.getAvailableSlots(date as string, serviceId as string);

  res.status(200).json({
    success: true,
    message: 'Available slots retrieved successfully',
    data: availableSlots,
  });
});

export const slotControllers = {
  createSlot,
  getAvailableSlots
};