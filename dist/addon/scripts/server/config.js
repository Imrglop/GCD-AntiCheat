// Edit Settings Here

server.__GCD_CONFIG__ =
{
    "general": {
        "debug": {
            "general": true, // general debug mode actions
            "logToChat": true // used for debugging as an addon/ingame
        }
    },
    "checks":
    {
        "reach": {
            "enabled": true,
            "onFlagged": "kick", // ban, warn, misc
            "data": {
                "maxReach": 3.5,
            }
        },

        
        // -- Below only work on certain modded servers, this is auto detected --
        "nbt": {
            "enabled": true,
            "onFlagged": "misc" // remove the cheated item from inventory
        }
    }
}