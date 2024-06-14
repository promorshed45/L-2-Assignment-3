// services/booking.service.ts

import httpStatus from "http-status";
import { Service } from "../service/service.model";
import { User } from "../user/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import AppError from "../../errors/AppError";
import { Slot } from "../slot/slot.model";


const createBookingIntoDB = async (slotId: string, serviceId: string, userId: string, payload: Partial<TBooking>) => {

  // Check if customer exists
  // const customerExists = await User.findById({userId});
  // if (!customerExists) {
  //   throw new Error('Customer not found');
  // }

  const service = payload?.serviceId;

  const isBookingExist = await Booking.findOne({ service })
  if (isBookingExist) {
    throw new AppError(httpStatus.CONFLICT, "Booking is already exist")
  }

  // //Check if the user is exit
  // const isUserExist = await User.findById(user)

  // console.log(isUserExist);

  // if (!isUserExist) {
  //   throw new AppError(httpStatus.NOT_FOUND, "User not found")
  // }

  //Check if the service is exit
  const isServiceExist = await Service.findById(serviceId)

  if (!isServiceExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found")
  }

  //Check if the service is exit
  const isSoltsExist = await Slot.findById(slotId)

  if (!isSoltsExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Slot not found")
  }

  const newBooking = await Booking.create({
    customer: userId,
    service: serviceId,
    slot: slotId,
    vehicleType: payload.vehicleType,
    vehicleBrand: payload.vehicleBrand,
    vehicleModel: payload.vehicleModel,
    manufacturingYear: payload.manufacturingYear,
    registrationPlate: payload.registrationPlate,
  });

  // Populate the booking details to include customer, service, and slot information
//   await newBooking.populate('customer').populate('slot').execPopulate();
   // Update the slot to mark it as booked
   await newBooking.save();

   return newBooking;
};


export const BookingService = {
  createBookingIntoDB,
};
