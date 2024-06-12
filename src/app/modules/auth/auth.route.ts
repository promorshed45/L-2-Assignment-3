import express from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { createUserValidation } from "../user/user.validation";


const router = express.Router();

router.post(
  "/signup",
  // validateRequest(createUserValidation),
  authControllers.signup
);



export const AuthRoute = router;

