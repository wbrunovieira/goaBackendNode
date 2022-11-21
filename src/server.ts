import 'reflect-metadata'
import 'express-async-errors' 
import "./container";

import express, { NextFunction, Request, Response } from 'express';

import { router } from './routes';

import './database';
import { AppError } from './errors/AppError';

const app = express();

app.use(express.json());

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ status: 'error', message: err.message });
        }

        return response
            .status(500)
            .json({ status: 'error', message: 'Internal server error' });
    },
);

app.use(router);

app.listen(3333, () => console.log('Server in running !!!! 😜 '));