"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require('os');
class ConfigModel {
    constructor() {
        this.configPath = os.homedir();
        this.databasePath = os.homedir();
        this.restPort = 2525;
    }
}
exports.ConfigModel = ConfigModel;
//# sourceMappingURL=ConfigModel.js.map