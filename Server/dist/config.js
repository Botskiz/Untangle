const os = require('os');
class Config {
    constructor() {
        this.configPath = os.homedir();
        this.databasePath = os.homedir();
        this.restPort = 2525;
    }
    loadConfig() {
        console.log("Loading config.json from " + this.configPath);
    }
    saveConfig() {
        console.log("Writing config.json" + this.configPath);
    }
}
module.exports = Config;
//# sourceMappingURL=config.js.map