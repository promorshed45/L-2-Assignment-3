import { USER_ROLE } from "./user.constants";

export interface TUser {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: keyof typeof USER_ROLE;
    address: string;
  }
  