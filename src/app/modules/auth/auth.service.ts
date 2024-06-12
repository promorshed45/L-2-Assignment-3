import { USER_ROLE } from "../user/user.constants";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";


// Create New Admin to DataBase
const signup = async (payload: TUser) => {

   //user existence check
   const user = await User.findOne({ email: payload.email });

   if (user) {
     throw new Error("User already exists");
   }
   
    const newUser = await User.create(payload);
    return newUser;
  };

  export const AuthServices = {
    signup,
  };