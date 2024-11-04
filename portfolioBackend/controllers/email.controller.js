import { emailSender } from "../services/email.service.js";
import { catchAsync } from '../utils/catchAysnc.js';
import httpStatus from 'http-status';
import { logger } from '../config/logger.js';

export const sendEmail = catchAsync(async(req, res) => {
    const { name, email, message } = req.body;
    logger.info('sending email...');
    await emailSender(name, email, message);
    res.status(httpStatus.OK).json({status: httpStatus.OK, message: 'Email sent successfully'});
})