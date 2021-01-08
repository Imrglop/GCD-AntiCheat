// Edit Settings Here

server.__GCD_CONFIG__ =
{
    "configVersion": "b2.0.0",
    "general": {
        "debug": {
            "general": true, // general debug mode actions
            "logToChat": true // used for debugging as an addon/ingame
        },
        "apiEnabled": true // "API" to detect when a player is flagged and the details with another script,
        // and be able to cancel it
    },
    "checks":
    {
        "reach": {
            "enabled": true,
            "onFlagged": "kick", // ban, warn, misc
            "data": {
                "maxReach": 3.5,
                "nextHit": 1 // Next time, a hit needs to be below this number (seconds) 
            }
        },
        "nuker": {
            "enabled": true,
            "onFlagged": "kick",
            "data": {
                "tolerance": 9
            }
        },

        // -- Below only work on certain modded servers, this is auto detected --
        "nbt": {
            "enabled": true,
            "onFlagged": "misc" // remove the cheated item from inventory
        }
    },
    "messages":
    {
        "kick": {
            "default": "&cYou have been kicked for Cheating: &4%c&c."
            // Place specific messages here, e.g. uncomment below
            //,"nuker": "&2&lCustom Nuker Kick Message"
        },
        "ban": "&cYou have been banned from the server."
    }
}