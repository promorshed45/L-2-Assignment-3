import { Request, Response } from 'express';
import { bookingService } from './booking.service';
import catchAsync from '../../utils/catechAsync';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingService.createBookingIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Booking successful",
    data: result,
  });
});

export const bookingControllers = {
    createBooking,
  };
