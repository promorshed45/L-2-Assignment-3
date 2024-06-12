import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";


// Creates a new booking in the database
const createBookingIntoDB = async (payload: TBooking) => {
  const newBooking = await Booking.create(payload);
  return newBooking;
};

export const bookingService = {
    createBookingIntoDB,
  };
