import express from "express";
import { auth } from "../../middleware/auth";
import { BookingController } from "./booking.controller";

const router = express.Router();

router.post(
  "/",
  // auth("user"),
  BookingController.createBooking
);


export const BookingRoute = router;

