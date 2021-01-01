import { config } from "../../config";
import { Check, TCheck } from "../Check";

export class NBT extends Check implements TCheck {
    settings: any
    constructor() {
        super('NBT', config.getActionType<NBT>('nbt'), 'nbt');
    }
    onTick(): void {
        throw new Error("Method not implemented.");
    }
    onEnable(): void {
        eval(`server.__gcd_nbt_start__(this.settings.actionType)`);
    }
    onDisable(): void {
        throw new Error("Method not implemented.");
    }
    
}