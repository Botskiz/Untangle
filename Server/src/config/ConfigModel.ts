const os = require('os');

class ConfigModel {
    configPath: string;
    databasePath: string;
    restPort: number;

    constructor() {
        this.configPath = os.homedir();
        this.databasePath = os.homedir();
        this.restPort = 2525;
    }

}

export {ConfigModel};