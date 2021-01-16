// ----------- Imports -----------

import { Config } from "../../config";
import { broadcast, system } from "../../index";
import { ChatColor } from "../ChatColor";
import { Check, IXRay, TCheck } from "../Check";
import { Player } from "../Player";

// ----------- Class -----------

export class XRay extends Check implements TCheck {
    constructor() {
        super('XRay', Config.getActionType('x-ray'), 'x-ray');
    }

    onTick(): void {
    }

    onEnable(): void {
        system.listenForEvent(ReceiveFromMinecraftServer.PlayerDestroyedBlock, (eventData) => {
            const {
                data: {
                    block_identifier,
                    block_position,
                    player
                }
            } = eventData;
            if (block_position.y < 55) {
                var bid = block_identifier.split(':',2)[1];
                var settings = Config.getCheckSettings<IXRay>(this.settings.nid);
                if (settings.data.blocks.includes(bid)) {
                    // FIXME: TypeError: Cannot convert null or undefined to object
                    //if (this.onFlagged({ 'player': player, 'block': block_identifier, 'position': block_position })) return;
                    var plr = new Player(player);
                    broadcast(`${plr.getName()} mined ${ChatColor.RED}${bid
                    .split('_')
                    .join(' ')}${ChatColor.DARK_GREEN}.`);
                }
            }
        })
    }
    onDisable(): void {
    }

}