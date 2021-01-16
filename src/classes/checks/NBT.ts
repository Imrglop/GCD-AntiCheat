// ----------- Imports -----------

import { banPlayer, cGlobal } from "../../index";
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
        // FIXME: Fix Placing down chests cancelling for some reason

        if (banPlayer != null) {
            var serverAny : any = server;
            serverAny.__gcd_nbt_start__(this.settings.actionType, banPlayer, this)
            //eval(`server.__gcd_nbt_start__(this.settings.actionType, bp, of);`);
        }
    }
    public onDisable(): void {
    }
}