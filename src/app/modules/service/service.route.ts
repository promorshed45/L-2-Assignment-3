import express from "express";
import { serviceControllers } from "./service.controller";
import { slotControllers } from "../slot/slot.controller";
import { auth } from "../../middleware/auth";

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  serviceControllers.createService
);
router.get(
  "/:id",
  serviceControllers.getService
);
router.get(
  "/",
  serviceControllers.getAllServices
);
router.put(
  "/:id",
  auth("admin"),
  serviceControllers.updateService
);
router.delete(
  "/:id",
  auth("admin"),
  serviceControllers.softDeleteService
);

router.post(
  "/slots",
  auth("admin"),
  slotControllers.createSlot
);





export const ServiceRoute = router;

