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




export const ServiceRoute = router;

