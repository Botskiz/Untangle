"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
// Set up application configuration.
const ConfigModel_1 = require("./config/ConfigModel");
const ConfigController_1 = require("./config/ConfigController");
const app = express.default();
let configModel = new ConfigModel_1.ConfigModel();
let configController = new ConfigController_1.ConfigController(configModel);
configController.loadConfig();
// Set up routes for REST API.
//const portRouter = require('./routes/portRouter.js'); 
const portRouter = __importStar(require("./routes/portRouter"));
const deviceRouter = __importStar(require("./routes/deviceRouter.js"));
app.use(portRouter.routerPath, portRouter.router);
app.use(deviceRouter.routerPath, deviceRouter.router);
// Listen to configured port.
app.listen(configModel.restPort, function () {
    console.log('Listening on port ' + configModel.restPort);
});
//# sourceMappingURL=main.js.map