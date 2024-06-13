import httpStatus, { NOT_FOUND } from "http-status";
import AppError from "../../errors/AppError";
import { Service } from "../service/service.model";
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

// Creates a new slot in the database
const createSlotIntoDB = async (payload: TSlot) => {

  const service = payload?.service;

  const isSlotsExist = await Slot.findOne({service})

  if(isSlotsExist){
    throw new AppError(httpStatus.CONFLICT, "Slots is already exist")
  }


  //Check if the slot is exit

  const isServiceExist = await Service.findById(service)

  if(!isServiceExist){
    throw new AppError(httpStatus.NOT_FOUND, "Service not found")
  }

  


  const newSlot = await Slot.create(payload);
  return newSlot;
};


export const slotService = {
    createSlotIntoDB,
  };
