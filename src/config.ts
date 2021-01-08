import { CheckConfiguration } from "./classes/Check";
import { log } from "./index";

export namespace Config {
    var initialized = false;
    var config: any;
    export function getConfig() {
        return config;
    }
    export function init() {
        if (!initialized) {
            try {
                eval("config = server.__GCD_CONFIG__;");
            } catch (e) {
                log(false, "Couldn't load config! err: " + e);
                return;
            }
            initialized = true;
        }// else throw Error("Already initialized");
    }

    export function getCheckSettings<T>(nid: string): CheckConfiguration<T> {
        return config.checks[nid];
    }

    export function getActionType<T>(nid: string): any {
        return getCheckSettings<T>(nid).onFlagged;
    }

    export function getMessages(type: string): any {
        return config.messages[type];
    }
}