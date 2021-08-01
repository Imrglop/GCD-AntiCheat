// ----------- Imports -----------
import { existsSync, mkdirSync } from 'fs';
import { events } from 'bdsx/event';
import { checkManager } from './Anticheat/Check/CheckManager';
import { Config } from './Config';
import { Logger } from './Logger';
// ------------ Main -------------

export const dirPath: string = "./GCD";
export const configName: string = "config.yml";
export var config: Config = new Config();

export const isDebugMode: boolean = true;

if (!existsSync(dirPath)) {
    mkdirSync(dirPath);
}

checkManager.init();

var res = config.load(dirPath + "/" + configName);

if (res == false) {
    Logger.error("Could not load the config correctly!");
} else {
    Logger.log("Loaded config succesfully.");
}

Logger.log("Loaded.");

events.serverClose.on(() => {
    checkManager.disableChecks();
})