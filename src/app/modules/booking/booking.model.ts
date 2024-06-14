import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
import { optional } from 'zod';

// Mongoose schema for the Booking model
const BookingSchema = new Schema({
  customer: { type: Schema.Types.ObjectId as any, ref: 'User'},
  service: { type: Schema.Types.ObjectId as any, ref: 'Service', required: true },
  slot: { type: Schema.Types.ObjectId as any, ref: 'Slot', required: true },
  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  manufacturingYear: { type: Number, required: true },
  registrationPlate: { type: String, required: true },
}, { timestamps: true }
);

// Define and export the Booking model
export const Booking = model<TBooking>('Booking', BookingSchema);
