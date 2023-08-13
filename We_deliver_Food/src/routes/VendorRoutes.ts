import express, { NextFunction, Request, Response } from "express";
import {
	createVendor,
	deleteVendorById,
	getVendorById,
	getVendors,
	updateVendorById,
} from "../controller/index";
const router = express.Router();
router.post("/create", createVendor);
router.get("/all", getVendors);
router.get("/singleVendor/:id", getVendorById);
router.put("/updateVendor/:id", updateVendorById);
router.delete("/deleteVendor/:id", deleteVendorById);
export { router as vendorRoutes };
