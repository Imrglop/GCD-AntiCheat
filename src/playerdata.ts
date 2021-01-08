// ----------- Imports -----------

import { log, system } from "./index";

// ----------- Varialbes -----------

var defaultData = 
{
    "reach": {
        "times": 0,
        "flags": 0
    },
    "nbt": {
        "flags": 0
    }
}

// ----------- Class -----------

export interface FlagData {
    flags : number
    times? : number
}

export interface TagComponent {
    data: string[]
}

// ----------- Namespace -----------

export namespace PlayerData {
    export namespace reach {
        /**
         * Player-Entity ID, time last hit
         */
        export var times = new Map<number, number>();
    }
    export namespace nuker {
        export var blocksBroken = new Map<number, number>();
    }
}