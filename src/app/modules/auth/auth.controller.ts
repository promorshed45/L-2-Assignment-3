import config from "../../config";
import catchAsync from "../../utils/catechAsync";
import { AuthServices } from "./auth.service";

const createUser = catchAsync(async (req, res) => {
    const result = await AuthServices.createUserIntoDB(req.body);
  
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User registered successfully",
      data: result,
    });
  });

  const loginUser = catchAsync(async (req, res) => {
    const { user, accessToken, refreshToken } = await AuthServices.loginUser(req.body);
  
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
    });

  
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      token: accessToken,
      data: user
    });
  });

  
  export const authControllers = {
    createUser,
    loginUser
  };