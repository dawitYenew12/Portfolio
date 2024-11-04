import express from 'express';
import http from 'http';
import config from './config/config.js';
import emailRouter from './routes/email.route.js';
import { errorHandler, errorConverter } from './Middleware/error.js';
import ApiError from './utils/ApiError.js';
import httpStatus from 'http-status';
import cors from 'cors';


const exitHandler = (server) => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unExpectedErrorHandler = (server) => {
    return function (error) {
        logger.error(error);
        exitHandler(server);
    }
}
const startServer = () => {
    const app = express();    
    app.use(cors());
    const httpServer = http.createServer(app);

    app.use(express.json());
    app.use(emailRouter);
    app.use((req, res, next) => {
        next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
    })
    app.use(errorConverter);
    app.use(errorHandler);

    
    const server = httpServer.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });

    process.on('uncaughtException', unExpectedErrorHandler(server));
    process.on('unHandledRejection', unExpectedErrorHandler(server));

}

startServer();