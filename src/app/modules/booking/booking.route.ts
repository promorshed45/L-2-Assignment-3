import express from "express";
import { auth } from "../../middleware/auth";
import { BookingController } from "./booking.controller";
import validateRequest from "../../middleware/validateRequest";
import { BookingValidations } from "./booking.validation";

const router = express.Router();

router.post(
  "/",
  auth("user"),
  validateRequest(BookingValidations.createBookingValidation),
  BookingController.createBooking
);

router.get(
  "/",
  auth("admin"),
  BookingController.getAllBookings
);


export const BookingRoute = router;

