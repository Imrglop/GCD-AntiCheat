import { ServerPlayer } from "../../bdsx/bds/player";
import { serverInstance } from "../../bdsx/bds/server";

export namespace Util {
    export var playerList: ServerPlayer[] = [];
    export function updatePlayerList(): void {
        var playerList = serverInstance.minecraft.getLevel().players;
        for (let i = 0; i < Util.playerList.length; i++) {
            Util.playerList.pop();
        }
        for (let i = 0; i < playerList.size(); i++) {
            var plr: ServerPlayer | null = playerList.get(i);
            if (plr != null) {
                Util.playerList.push(plr);
            }
        }
    }
}