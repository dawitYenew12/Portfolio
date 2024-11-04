import { createTransport } from 'nodemailer';
import { getAccessToken } from '../utils/oAuth.js';
import config from '../config/config.js';
import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import { logger } from '../config/logger.js';

export const emailSender = async (name, email, message) => {
    try {
        const accessToken = await getAccessToken();
        const transporter = createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.senderEmail,
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                refreshToken: config.refreshToken,
                accessToken: accessToken,
            },
        });
        const mailOptions = {
            from: config.senderEmail,
            to: 'wizdevaxo.06464@gmail.com',
            subject: `Contact message from ${name}`,
            text: 'Hello',
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
            replyTo: email
        }

        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        logger.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};