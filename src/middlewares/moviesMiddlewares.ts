import { NextFunction, Request, Response } from 'express';

//Schemas
import { postSchema, putSchema } from '../models/moviesModels.js';

export function postValidation (req: Request, res: Response, next: NextFunction) {
    const { error } = postSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail)=> detail.message);
        return res.status(422).send(errors);
    }

    next()
};

export function putValidation (req: Request, res: Response, next: NextFunction) {
    const { error } = putSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail)=> detail.message);
        return res.status(422).send(errors);
    };

    next()
};