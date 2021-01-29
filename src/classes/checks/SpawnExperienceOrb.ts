// ----------- Imports -----------

import { Config } from '../../config';
import { Check, TCheck } from '../Check';

// ----------- Class -----------

export class SpawnExperienceOrb extends Check implements TCheck {
    constructor() {
        super('Spawn Experience Orb', Config.getActionType('spawn-xp'), 'spawn-xp');
    }
    onTick(): void {
    }
    onEnable(): void {
        var sa : any = server;
        sa.__gcd_spawn_experience_orb_start__(this);
    }
    onDisable(): void {
    }

}