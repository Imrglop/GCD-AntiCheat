import { config } from "../../config";
import { log } from "../../index";
import { Check, TCheck } from "../Check";

export class Reach extends Check implements TCheck {
    constructor() {
        super('Reach', config.getActionType<Reach>('reach'), 'reach');
    }
    // TODO: is debug log
    onTick(): void {
        log("reach on tick");
    }
    onEnable(): void {
        log("reach on enable");
    }
    onDisable(): void {
        log("reach on disable");
    }

    
}