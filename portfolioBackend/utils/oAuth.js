import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { logger } from '../config/logger.js'; // Adjust based on your logger setup
import config from '../config/config.js';
dotenv.config();

// Set up OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
    config.clientId,
    config.clientSecret,
    config.redirectUri
);

oAuth2Client.setCredentials({ refresh_token: config.refreshToken });

// Function to get a new access token using OAuth2
export const getAccessToken = async () => {
    try {
        const response = await oAuth2Client.getAccessToken();
        if (!response || !response.token) {
            throw new Error('Failed to retrieve access token');
        }
        return response.token;
    } catch (error) {
        logger.error('Error retrieving access token:', error);
        throw new Error('Failed to retrieve access token');
    }
};