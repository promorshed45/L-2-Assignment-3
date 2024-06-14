import { Types } from "mongoose";

export type TSlot = {
  _id: string;
  service: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: 'available' | 'booked' | 'canceled';
  }


  