import express from 'express';

async function wipV1(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.send('wipV1');
    return next();
}

export default wipV1;
