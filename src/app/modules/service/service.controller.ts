import { Request, Response } from 'express';
import catchAsync from '../../utils/catechAsync';
import { serviceService } from './service.service';

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.createServiceIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Service created successfully",
    data: result,
  });
});



export const serviceControllers = {
    createService,
  };
