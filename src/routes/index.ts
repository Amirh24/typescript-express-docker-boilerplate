import express from 'express';
import * as wip from './wip';
import { stringify } from '../services/utils';

export function setRoutes(app: express.Application) {
    // Creating routes for '/'
    // TODO: make these routes unacceable from the internet using CloudFlare Firewall Rules.
    // These routes are strictly here to return early any request that reroutes to the '/' path internally
    app.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(`Request headers: ${stringify(req.headers)}, body ${stringify(req.body)}`);
        res.json({ status: true });
        return next();
    });

    app.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(`Request headers: ${stringify(req.headers)}, body ${stringify(req.body)}`);
        res.json({ status: true });
        return next();
    });

    wip.setRoutes(app);
}
