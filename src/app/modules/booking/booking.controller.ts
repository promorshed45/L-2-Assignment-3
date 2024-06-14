import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { BookingService } from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const {slotId, serviceId } = req.body;
  const {userId} = req.params;
  const result = await BookingService.createBookingIntoDB(slotId, serviceId, userId, req.body);
  console.log(result);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Booking created successfully",
    data: result,
  });
});


export const BookingController = {
  createBooking,
};
