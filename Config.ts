import { existsSync, readFileSync, writeFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { configName, dirPath } from '.';
import { checkManager } from './Anticheat/Check/CheckManager';
import { Logger } from './Logger';

export class Config {
    private object: any = {};

    constructor() {
    }

    public load(path: string): boolean {
        var configContents: string;
        Logger.log("Could not find config file, writing defaults..");
        if (!existsSync(path)) {
            var finObj: any = {"Checks": {}};
            for (let check of checkManager.getChecks()) {
                let checkObj = {
                    "Enabled": true,
                    "Settings": check.getDefaultSettings()
                }
                if (finObj.Checks[check.getCategoryName()] == null) {
                    finObj.Checks[check.getCategoryName()] = {};
                }
                finObj.Checks[check.getCategoryName()][check.getCheckName()] = checkObj;
            }
            writeFileSync((dirPath + "/" + configName), yaml.dump(finObj));
        }
        try {
            configContents = readFileSync(path).toString();
        } catch (e) {
            Logger.error("Could not open file '" + path + "' for reading! " + e);
            return false;
        }
        const res = yaml.load(configContents);
        if (typeof res != "object") {
            return false;
        }

        this.object = res;
        // Load Checks
        {
            checkManager.enableChecks();
        }

        return true;
    }

    public yamlObj(): any {
        return this.object;
    }
}