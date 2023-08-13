import express, { NextFunction, Request, Response } from "express";
import {
	createAdmin,
	getAdmins,
	getAdminById,
	updateAdminById,
	deleteAdminById,
} from "../controller/index";

const router = express.Router();

router.post("/create", createAdmin);
router.get("/all", getAdmins);
router.get("/singleAdmin/:id", getAdminById);
router.put("/updateAdmin/:id", updateAdminById);
router.delete("/deleteAdmin/:id", deleteAdminById);

export { router as adminRoutes };
