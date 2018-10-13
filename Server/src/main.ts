import * as Express from 'express';

// Set up application configuration.
import { ConfigModel }  from './config/ConfigModel';
import { ConfigController } from './config/ConfigController';

const app: Express.Application = Express.default();

let configModel = new ConfigModel();
let configController = new ConfigController(configModel);

configController.loadConfig();

// Set up routes for REST API.
import * as portRouter from './routes/portRouter';
import * as deviceRouter from './routes/deviceRouter.js';

app.use(portRouter.routerPath, portRouter.router);
app.use(deviceRouter.routerPath, deviceRouter.router);

// Listen to configured port.
app.listen(configModel.restPort, function () {
    console.log('Listening on port ' + configModel.restPort);
})