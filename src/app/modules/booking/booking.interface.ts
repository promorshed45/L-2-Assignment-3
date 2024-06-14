import { TService } from '../service/service.interface';
import { TSlot } from '../slot/slot.interface';
import { TUser } from '../user/user.interface';

export type TBooking = {
  customer?: TUser['_id'];
  service: TService['_id'];
  slot: TSlot['_id'];
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt: Date;
  updatedAt: Date;
}

