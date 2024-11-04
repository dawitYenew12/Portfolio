import { sendEmail } from '../controllers/email.controller.js';
import express from 'express';

const emailRouter = express.Router();
emailRouter.post('/api/contact', sendEmail);

export default emailRouter;