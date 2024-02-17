"use strict";
//  server/src/middleware/errorMiddleware.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalErrorHandler = exports.notFoundHandler = void 0;
const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not Found = ${req.originalUrl}`);
    res.status(404);
    next(error);
};
exports.notFoundHandler = notFoundHandler;
const generalErrorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
exports.generalErrorHandler = generalErrorHandler;
