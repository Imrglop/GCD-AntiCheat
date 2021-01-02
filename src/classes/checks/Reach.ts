// ----------- Imports -----------

import { Config } from "../../config";
import { isImmune, log } from "../../index";
import { Check, IReach, TCheck } from "../Check";

// ----------- Class -----------

export class Reach extends Check implements TCheck {
    constructor() {
        super('Reach', Config.getActionType<this>('reach'), 'reach');
    }

    onTick(): void {
    }
    onEnable(): void {
        var sys = this.system;
        this.system.listenForEvent(ReceiveFromMinecraftServer.PlayerAttackedEntity, function(eventData) {
            const {
                data: {
                    attacked_entity,
                    player
                }
            } = eventData;
            log("before")
            if (isImmune(player)) return;
            log("after")
            var pos1 : IComponent<any> = sys.getComponent(player, "minecraft:position");
            var {
                data
            } = pos1;
            var x1 = data.x;
            var y1 = data.y;
            var z1 = data.z;
            var pos2 : IComponent<any> = sys.getComponent(attacked_entity, "minecraft:position");
            var {
                data
            } = pos2;
            var x2 = data.x;
            var y2 = data.y;
            var z2 = data.z;
            const hitboxComponent : IComponent<any> = sys.getComponent(attacked_entity, "minecraft:collision_box");
            if (!hitboxComponent) return;

            var dist3D = Math.sqrt(
                Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2)
            );
            dist3D -= hitboxComponent.data.width;
            dist3D = Math.abs(dist3D);
            log(`dist: ${dist3D}`);
            if (dist3D > Config.getCheckSettings<IReach>('reach').data.maxReach) {
                // TODO: max reach times and creative mode
                log('Player flagged');
            }
        })
    }
    onDisable(): void {
    }
}