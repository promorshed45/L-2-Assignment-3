import express from "express";
import { serviceControllers } from "./service.controller";

const router = express.Router();

router.post(
  "/",
  serviceControllers.createService
);




export const ServiceRoute = router;

