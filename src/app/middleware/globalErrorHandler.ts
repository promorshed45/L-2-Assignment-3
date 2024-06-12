import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import config from "../config";
import handleZodError from "../errors/handleZodError";
import { TErrorSources } from "../interface/error";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";

const globalErrorHandler: ErrorRequestHandler = ((err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wroing';

  let errorSources: TErrorSources = [{
    path: '',
    message: 'Something went wroing'
  }]

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources
  } else if (err?.name === 'ValidatorError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError?.statusCode,
      message = simplifiedError?.message,
      errorSources = simplifiedError?.errorSources
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    statusCode = simplifiedError?.statusCode,
      message = simplifiedError?.message,
      errorSources = simplifiedError?.errorSources
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err)
    statusCode = simplifiedError?.statusCode,
      message = simplifiedError?.message,
      errorSources = simplifiedError?.errorSources
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message
      }
    ]

    // ultmate return
    return res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      err,
      stack: config.node_env === 'development' ? err?.stack : null
    })
  }
});


export default globalErrorHandler;