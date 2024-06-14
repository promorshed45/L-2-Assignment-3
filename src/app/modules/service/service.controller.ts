import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { serviceService } from './service.service';

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.createServiceIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Service created successfully",
    statusCode: 200,
    data: result,
  });
});

const getService = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  const result = await serviceService.getServiceById(serviceId);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: result,
  });
});


const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.getAllServices();

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  const result = await serviceService.updateService(serviceId, req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: result,
  });
});

const softDeleteService = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  const result = await serviceService.softDeleteService(serviceId);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: result,
  });
});



export const serviceControllers = {
    createService,
    getService,
    getAllServices,
    updateService,
    softDeleteService,
    // createSlot
  };
