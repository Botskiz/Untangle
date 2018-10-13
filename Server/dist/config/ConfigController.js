"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigController {
    constructor(configModel) {
        this.model = configModel;
    }
    loadConfig() {
        console.log("Loading config.json from " + this.model.configPath);
    }
    saveConfig() {
        console.log("Writing config.json" + this.model.configPath);
    }
}
exports.ConfigController = ConfigController;
//# sourceMappingURL=ConfigController.js.map