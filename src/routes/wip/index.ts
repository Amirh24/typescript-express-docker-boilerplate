import express from 'express';
import wip from './handlers/wipHandler';

const PREFIX = '/wip';

export function setRoutes(app: express.Application) {
    app.post(`${PREFIX}/example`, wip);
}
