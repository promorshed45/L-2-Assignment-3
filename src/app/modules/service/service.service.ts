import { TService } from "./service.interface";
import { Service } from "./service.model";


// Creates a new service in the database
const createServiceIntoDB = async (payload: TService) => {
  const newService = await Service.create(payload);
  return newService;
};




export const serviceService = {
    createServiceIntoDB,
  };
