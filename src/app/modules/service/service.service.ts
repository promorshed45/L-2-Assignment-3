import { TService } from "./service.interface";
import { Service } from "./service.model";


// Creates a new service in the database
const createServiceIntoDB = async (payload: TService) => {
  const newService = await Service.create(payload);
  return newService;
};


const getServiceById = async (id: string) => {
  const service = await Service.findById(id);
  if (!service) {
    throw new Error("No Data Found",);
  }
  return service;
};


export const serviceService = {
    createServiceIntoDB,
    getServiceById  
  };
