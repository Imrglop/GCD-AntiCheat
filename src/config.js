// (copied manually, seperate script)
// Edit Settings Here
server.__GCD_CONFIG__ =
{
    "checks":
    {
        "reach": {
            "enabled": true,
            "maxReach": 3.5,
            "onFlagged": "kick" // ban, warn, misc
        },

        
        // -- Below only work on certain modded servers, this is auto detected --
        "nbt": {
            "enabled": true,
            "onFlagged": "misc" // remove the cheated item from inventory
        }
    }
}