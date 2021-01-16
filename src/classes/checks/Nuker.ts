// ----------- Imports -----------

import { Config } from "../../config";
import { debugLog, isImmune, log, players } from "../../index";
import { PlayerData } from "../../playerdata";
import { getServerTPS } from "../../tps";
import { Check, INuker, TCheck } from "../Check";

// ----------- Class -----------

export class Nuker extends Check implements TCheck {
    constructor() {
        super('Nuker', Config.getActionType<this>('nuker'), 'nuker');
    }
    onTick(): void {
        if (true) {
            for (let [i, v] of PlayerData.nuker.blocksBroken) {
                if (!(isImmune(players.get(i)))) {
                    if (v > 0) {
                        v = 0; // set the blocks broken to 0
                        PlayerData.nuker.blocksBroken.set(i, v);
                    }
                }
            }
        }
    }
    onEnable(): void {
        this.system.listenForEvent(ReceiveFromMinecraftServer.PlayerDestroyedBlock, (eventData) => {
            const {
                data: {
                    //block_identifier,
                    //block_position,
                    player
                }
            } = eventData;
            if (isImmune(player)) return;
            var blocksBroken = PlayerData.nuker.blocksBroken.get(player.id);
            if (!blocksBroken) blocksBroken = 0;
            blocksBroken++;
            var checkSettings = Config.getCheckSettings<INuker>('nuker');
            var maxBlocks = Math.floor((checkSettings.data.tolerance * 20) / getServerTPS());
            maxBlocks = maxBlocks < checkSettings.data.tolerance ? checkSettings.data.tolerance : maxBlocks; // too low? set to tolerance
            log(true, 'blocks=', blocksBroken, '/', maxBlocks);
            if (blocksBroken > maxBlocks) {
                log(true, 'player failed Nuker')
                this.onFlagged({ player: player, blocks_affected: blocksBroken });
            }
        })
    }
    onDisable(): void {
    }

}