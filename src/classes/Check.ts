// ----------- Imports -----------

import { Config } from '../config';
import { cGlobal, externalListeners } from '../index';
import { ActionType } from './ActionType';

// ----------- Class -----------

export class Check {
    system : IVanillaServerSystem;
    settings = {
        name: '',
        actionType : '',
        nid : ''
    }
    constructor(name : string, actionType : ActionType, nid : string) {
        this.settings.name = name;
        this.settings.actionType = actionType;
        this.settings.nid = nid;
    }
    public isEnabled() : boolean {
        return Config.getCheckSettings(this.settings.nid).enabled;
    }

    /**
     * 
     * @param data the json to send to external scripts
     */
    public onFlagged(data : any) : boolean {
        if (cGlobal.getConfig().general.apiEnabled) {
            for (var listener of externalListeners.get(this.settings.nid)) {
                return listener(data);
            }
        }
        return false;
    }
}

// ----------- Exports -----------

export interface TCheck {
    onTick() : void
    onEnable() : void
    onDisable() : void
}

export interface IReach {
    readonly maxReach : number;
    readonly nextHit : number;
}
export interface INBT {
}

export interface CheckConfiguration<T> {
    readonly enabled : boolean
    readonly onFlagged : ActionType
    data: T
}