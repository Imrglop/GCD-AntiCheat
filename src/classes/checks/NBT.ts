// ----------- Imports -----------

import { cGlobal } from "../../index";
import { Check, TCheck } from "../Check";

// ----------- Class -----------

export class NBT extends Check implements TCheck {
    settings: any
    constructor() {
        super('NBT', cGlobal.getActionType<NBT>('nbt'), 'nbt');
    }
    public onTick(): void {
    }
    public onEnable(): void {
        eval(`server.__gcd_nbt_start__(this.settings.actionType);`);
    }
    public onDisable(): void {
    }
}