import { NextFunction, Request, Response } from "express";
import { CustomError, Validations } from "../../../utils";
import { Target } from "../../../models";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { host, port, health_endpoint, name } = req.body;

    // Validate request body
    const { error: validationError } = Validations.Target.createTarget.validate(
      {
        host,
        port,
        health_endpoint,
        name,
      }
    );

    if (validationError) {
      console.error(
        `Validation error: ${validationError.message}\n`,
        validationError
      );

      const error = new CustomError(400, validationError.message);
      return next(error);
    }

    // Check if target is reachable
    const targetURL = host + (port ? `:${port}` : "") + `/${health_endpoint}`;
    console.info(`Checking health of target: ${targetURL}`);

    const response = await fetch(targetURL, { method: "GET" });
    if (response.status !== 200) {
      console.error(`Health check error`);
      const healthCheckError = new CustomError(400, "Health check failed");
      return next(healthCheckError);
    }

    // Check if target already exists
    const existingTarget = await Target.findOne({ host, port });
    if(existingTarget) {
      console.error("Target already exists");
      const targetExistsError = new CustomError(400, "Target already exists");
      return next(targetExistsError);
    }

    // Save target to database
    const target = new Target({ host, port, health_endpoint, name });
    await target.save();

    return res.status(201).send({ message: "Target created successfully" });
  } catch (error) {
    console.error(`Internal Error Occurred: ${error.message}\n`, error);
    const internalError = new CustomError(500, error.message);
    return next(internalError);
  }
};
