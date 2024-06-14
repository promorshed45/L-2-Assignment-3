import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { slotService } from './slot.service';
import { Slot } from './slot.model';

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

      let query: any = { date };
      if (serviceId) {
          query.room = serviceId;
      }

      const slots = await Slot.find(query).populate('service');

      if (!slots) {
          return res.status(404).json({
              success: false,
              statusCode: 404,
              message: 'No slots found',
              data: []
          });
      }

      const availableSlots = slots.filter(slot => !slot.isBooked);


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