import { Request, Response, NextFunction } from "express";
import { Target } from "../../../models";
import { CustomError } from "../../../utils";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allTargets = await Target.find();
    res.status(200).json(allTargets);
  } catch (error) {
    const internalError = new CustomError(500, "Internal Server Error");
    console.error("Error in getAll controller:", internalError);
    next(internalError);
  }
};
