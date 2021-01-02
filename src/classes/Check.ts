import { Config } from '../config';
import { ActionType } from './ActionType';

export class Check {
    system : IVanillaServerSystem;
    settings = {
        name: '',
        actionType : '',
        nid : ''
    }
    constructor(name : string, actionType : ActionType, nid : string) {
        // WIP
    }
    public isEnabled() : boolean {
        return Config.getCheckSettings(this.settings.nid).enabled;
    }
}

export interface TCheck {
    onTick() : void
    onEnable() : void
    onDisable() : void
}

export interface IReach {
    readonly maxReach : number;
}
export interface INBT {
}

export interface CheckConfiguration<T> {
    readonly enabled : boolean
    readonly onFlagged : ActionType
    data: T
}