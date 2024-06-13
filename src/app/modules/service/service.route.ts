import express from "express";
import { serviceControllers } from "./service.controller";

const router = express.Router();

router.post(
  "/",
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
  serviceControllers.updateService
);
router.delete(
  "/:id",
  serviceControllers.softDeleteService
);




export const ServiceRoute = router;

