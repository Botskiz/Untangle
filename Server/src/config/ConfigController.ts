import { ConfigModel } from './ConfigModel'

class ConfigController {
    model: ConfigModel;

    constructor(configModel: ConfigModel) {
        this.model = configModel;
    }

    loadConfig() {
        console.log("Loading config.json from " + this.model.configPath);
    }

    saveConfig() {
        console.log("Writing config.json" + this.model.configPath);
    }
}

export { ConfigController };