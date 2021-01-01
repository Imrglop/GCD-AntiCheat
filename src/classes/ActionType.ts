/** What happens when a player is flagged. (MISC means it's controlled by the class itself)*/
export const enum ActionType {
    PLAYER_KICK = "kick",
    PLAYER_BAN = "ban",
    PLAYER_ADD_WARNING = "warn",
    MISC = "misc"
}