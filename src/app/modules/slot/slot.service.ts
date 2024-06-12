import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

// Creates a new slot in the database
const createSlotIntoDB = async (payload: TSlot) => {
  const newSlot = await Slot.create(payload);
  return newSlot;
};


export const slotService = {
    createSlotIntoDB,
  };
