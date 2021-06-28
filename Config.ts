import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { Logger } from './Logger';

export class Config {
    private object: object = {};

    constructor() {
    }

    public load(path: string): boolean {
        var configContents: string;
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
        return true;
    }

    public yamlObj(): object {
        return this.object;
    }
}