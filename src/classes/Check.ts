import { config } from '../config';
import { ActionType } from './ActionType';

export class Check {
    system : IVanillaServerSystem;
    settings = {
        name: '',
        actionType : '',
        nid : ''
    }
    constructor(name : string, actionType : ActionType, nid : string) {

    }
    public isEnabled() : boolean {
        return config.getCheckSettings<this>(this.settings.nid).enabled;
    }
}

export interface TCheck {
    onTick() : void
    onEnable() : void
    onDisable() : void
}

export interface Reach {
    readonly maxReach : number;
}
export interface NBT {
}

export interface CheckConfiguration<T> {
    readonly enabled : boolean
    readonly onFlagged : ActionType
    data: T
}