// Edit Settings Here

server.__GCD_CONFIG__ =
{
    "configVersion": "b2.0.0",
    "logger": {
        "timestamp": true // e.g. [1/16/2021 12:00:00 PM] [GCD] ...
    },
    "general": {
        "broadcastTag": "GCDAdmin",
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
                "maxReach": 3.7,
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
        },

        "x-ray": {
            "enabled": true,
            "onFlagged": "misc", // Not recommended, keep at "misc"
            "data": {
                "blocks": ['diamond_ore', 'iron_ore', 'gold_ore','ancient_debris','nether_gold_ore','emerald_ore','coal_ore','']
            }
        }
    },
    "messages":
    {
        "kick": {
            "default": "&cYou have been kicked for Cheating: &4%n&c."
            // Place specific messages here, e.g. uncomment below
            //,"nuker": "&2&lCustom Nuker Kick Message"
        },
        "ban": "&cYou have been banned from the server."
    }
}