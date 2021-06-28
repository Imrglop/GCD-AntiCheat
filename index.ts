// ----------- Imports -----------
import { existsSync, mkdirSync } from 'fs';
import { checkManager } from './Anticheat/Check/CheckManager';
import { Config } from './Config';
import { Logger } from './Logger';
// ------------ Main -------------

export const dirPath: string = "./GCD";
export const configName: string = "config.yml";
export var config: Config = new Config();

if (!existsSync(dirPath)) {
    mkdirSync(dirPath);
}

var res = config.load(dirPath + "/" + configName);

if (res == false) {
    Logger.error("Could not load the config correctly!");
} else {
    console.log(Logger.log("Loaded config succesfully."));
}

checkManager.init();
checkManager.enableChecks();

Logger.log("Loaded.");