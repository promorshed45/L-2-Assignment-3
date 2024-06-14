import httpStatus from "http-status";
import { Service } from "../service/service.model";
import { User } from "../user/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import AppError from "../../errors/AppError";
import { Slot } from "../slot/slot.model";


const createBookingIntoDB = async (slotId: string, serviceId: string, userId: string, payload: TBooking) => {


  const service = payload?.service;

  // Check if booking already exists for the service
  const isBookingExist = await Booking.findOne({ service });
  if (isBookingExist) {
      throw new AppError(httpStatus.CONFLICT, "Booking already exists");
  }

  
  // Check if customer exists
  // const customerExists = await User.findById(userId);
  // if (!customerExists) {
  //     throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  // }

  // Check if the service exists
  const isServiceExist = await Service.findById(serviceId);
  if (!isServiceExist) {
      throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  // Check if the slot exists
  const isSlotExist = await Slot.findById(slotId);
  if (!isSlotExist) {
      throw new AppError(httpStatus.NOT_FOUND, "Slot not found");
  }

  


  // Create the new booking
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
  // await newBooking.populate('customer').populate('service').populate('slot').execPopulate();

  // Update the slot to mark it as booked
  // newBooking.slot.isBooked = 'booked';
  // await newBooking.slot.save();

  return newBooking;
};



const getAllBookings = async () => {
  // Populate necessary fields: customer, service, slot
  const bookings = await Booking.find()
    .populate('customer', 'name email phone address')
    .populate('service', 'name description price duration isDeleted')
    .populate('slot', 'service date startTime endTime isBooked')
    .exec();

  return bookings;
};

const getUserBookings = async (userId: string) => {
  const bookings = await Booking.find({ customer: userId })
    .populate('customer')
    .populate('service')
    .populate('slot')
    .exec();
  return bookings;
};


export const BookingService = {
  createBookingIntoDB,
  getAllBookings,
  getUserBookings
};
