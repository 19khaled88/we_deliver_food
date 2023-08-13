import { NextFunction, Request, Response } from "express";
import { CreateVendorInpupt } from "../dto/Vendor.dto";

export const createVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const {name,ownerName,foodType,pinCode,address,phone,email,password} = <CreateVendorInpupt>req.body
        
		res.json({
			message: "create vendor",
			data: {name,ownerName,foodType,pinCode,address,phone,email,password},
		});
	} catch (error) {
		res.json({ message: "not created" });
	}
};
export const getVendors = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.json({ message: "get all vendors" });
};
export const getVendorById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;
	res.json({ message: `get vendor by id: ${id}` });
};
export const updateVendorById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;
	res.json({ message: `update vendor by id: ${id}` });
};
export const deleteVendorById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;
	res.json({ message: `delete vendor by id: ${id}` });
};
