import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { Check, CheckCategory, ICheck } from "../ICheck";

export class CrasherCheck extends Check implements ICheck {
    constructor() {
        super(CheckCategory.Exploit);
    }

    public override getCheckName() { return "Crasher"; }
    public override getDescription() { return "Patches an exploit that allows players to seamlessly crash the server."; }

    public override onEnable() {
        events.packetBefore(MinecraftPacketIds.MovePlayer).on((packet, _nID) => {
            const crasherMax = 3e7;
            var isBad = packet.pos.x > crasherMax || packet.pos.y > crasherMax || packet.pos.z > crasherMax;
            if (isBad) {
                return CANCEL;
            }
        });

        events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((packet, _nID) => {
            const crasherMax = 3e7;
            var isBad = packet.pos.x > crasherMax || packet.pos.y > crasherMax || packet.pos.z > crasherMax;
            if (isBad) {
                return CANCEL;
            }
        });
    }
}