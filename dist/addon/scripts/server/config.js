// Edit Settings Here

server.__GCD_CONFIG__ =
{
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
                "nextHit": 1.0 // Next time, a hit needs to be below this number (seconds) 
            }
        },

        
        // -- Below only work on certain modded servers, this is auto detected --
        "nbt": {
            "enabled": true,
            "onFlagged": "misc" // remove the cheated item from inventory
        }
    }
}