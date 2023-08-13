import { NextFunction, Request, Response } from "express";

export const createAdmin = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.json({ message: "create admin" });
};
export const getAdmins = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.json({ message: "get all admins" });
};
export const getAdminById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;
	res.json({ message: `get admin by id: ${id}` });
};
export const updateAdminById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;
	res.json({ message: `update admin by id: ${id}` });
};
export const deleteAdminById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;
	res.json({ message: `delete admin by id: ${id}` });
};
