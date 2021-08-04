import express from 'express';
import cors from 'cors';
import * as routes from './routes';

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

routes.setRoutes(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
