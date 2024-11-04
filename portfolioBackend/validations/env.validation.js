import joi from 'joi';

const envVarSchema = joi.object({
    PORT: joi.number().positive().default(3000).required(),
    CLIENT_ID: joi.string().required(),
    CLIENT_SECRET: joi.string().required(),
    REDIRECT_URI: joi.string().required(),
    REFRESH_TOKEN: joi.string().required(),
    NODE_ENV: joi.string().valid('development', 'production', 'test').default('development').required(),
    SENDER_EMAIL: joi.string().email().required()
}).unknown();

export default envVarSchema;