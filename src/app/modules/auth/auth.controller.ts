import catchAsync from "../../utils/catechAsync";
import { AuthServices } from "./auth.service";

const signup = catchAsync(async (req, res) => {
    const result = await AuthServices.signup(req.body);
  
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  });

  export const authControllers = {
    signup,
  };