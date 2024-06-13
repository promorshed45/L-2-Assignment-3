import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { slotService } from './slot.service';

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await slotService.createSlotIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});



export const slotControllers = {
  createSlot
};