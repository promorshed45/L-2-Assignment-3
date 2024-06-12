import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';


const BookingSchema = new Schema<TBooking>({
    customer: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true, 'Reference to the user who made the booking is required']
    },
    service: {
        type: Schema.Types.ObjectId, ref: 'Service',
        required: [true, 'Reference to the booked service is required']
    },
    slot: {
        type: Schema.Types.ObjectId, ref: 'Slot',
        required: [true, 'Reference to the booking slot is required']
    },
    vehicleType: {
        type: String,
        enum: ['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor'],
        required: [true, 'Type of the vehicle is required']
    },
    vehicleBrand: {
        type: String,
        required: [true, 'Brand or manufacturer of the vehicle is required']
    },
    vehicleModel: {
        type: String,
        required: [true, 'Model or variant of the vehicle is required']
    },
    manufacturingYear: {
        type: Number,
        required: [true, 'Manufacturing year of the vehicle is required']
    },
    registrationPlate: {
        type: String,
        required: [true, 'Unique registration number assigned to the vehicle is required']
    },
});

export const Booking = model<TBooking>('Booking', BookingSchema);
