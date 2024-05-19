import { Request, Response, NextFunction } from "express"
import { CustomError } from "./Error";

const handler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.statusCode).send({ message: err.message })
}

export default handler;