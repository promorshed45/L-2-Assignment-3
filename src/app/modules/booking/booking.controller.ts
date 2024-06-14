import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { BookingService } from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const {slotId, serviceId, userId } = req.body;
  // const {userId} = req.params;
  const result = await BookingService.createBookingIntoDB(slotId, serviceId, userId, req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Booking created successfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const bookings = await BookingService.getAllBookings();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'All bookings retrieved successfully',
    data: bookings,
  });
});


const getUserBookings = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user._id; // Assuming user is added to req object via authentication middleware
  const bookings = await BookingService.getUserBookings(userId);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'User bookings retrieved successfully',
    data: bookings,
  });
});


export const BookingController = {
  createBooking,
  getAllBookings,
  getUserBookings
};
