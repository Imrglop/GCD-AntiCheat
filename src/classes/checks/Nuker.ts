// ----------- Imports -----------

import { Config } from "../../config";
import { PlayerData } from "../../playerdata";
import { getServerTPS } from "../../tps";
import { Check, INuker, TCheck } from "../Check";

// ----------- Class -----------

export class Nuker extends Check implements TCheck {
    onTick(): void {
        if (true /*TODO: check if player is valid*/) {
            for (var [i, v] of PlayerData.nuker.blocksBroken) {
                if (v > 0) {
                    v = 0; // set the blocks broken to 0
                    PlayerData.nuker.blocksBroken.set(i, v);
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
            var blocksBroken = PlayerData.nuker.blocksBroken.get(player.id);
            if (!blocksBroken) blocksBroken = 0;
            blocksBroken++;
            var checkSettings = Config.getCheckSettings<INuker>('nuker');
            const maxBlocks = Math.floor((checkSettings.data.tolerance * 20) / getServerTPS());
            if (blocksBroken > maxBlocks) {
                this.onFlagged({ player: player, blocks_affected: blocksBroken });
            }
        })
    }
    onDisable(): void {
    }

}