import Joi from "joi";

export const validation = {
  createTarget: Joi.object({
    port: Joi.number().required(),
    host: Joi.string().required(),
    health_endpoint: Joi.string().required(),
    name: Joi.string().required(),
  }),
};
