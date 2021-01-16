# GCD Anticheat V2 (WIP)
 A script that prevents players from cheating in certain Minecraft: Bedrock Edition servers.

# Install
## Addon
-  Get the `mcpack` or `zip` file of a release

-  Install it normally

## BDS
-  Make sure you have `world_behavior_packs.json` in your server world, add this:

```json
[
	
	{
		"pack_id" : "7fb4654b-7c4c-4aae-b116-4145a6125f74",
		"version" : [ 2, 0, 0 ]
	}
]
```

-  Add the behavior pack to `behavior_packs` or `development_behavior_packs` of your server folder

## BDSX (or similar)

- Download the standalone version of a release
- Place the folder in `bdsx` folder (or wherever you put your scripts)
- Add `require './gcd'` in your `index.js`

# Build
 Current Instructions:

1. Clone or download the `zip` file

2. Build the typescript project normally (by running `webpack`), also make sure you download npm typescript and webpack first

3. Either leave the scripts in the addon, or as a standalone version

4. It should be built in the `dist/addon/scripts/server`. If using addon, no need to include the `nbt.js` and other ones that need a modded server, but the standalone script should be backwards compatible with an addon

# Listen for Flags

You can use an **external** server script (can be in an addon too) to listen when a player is flagged, and cancel it when needed, example:

```js
require('./gcd'); // if in addon, best to place the listener in system.initialize
function onReach(data) {
    console.log('Player failed reach, from external!')
    console.log('Flag Data: ' + JSON.stringify(data));
    if (data.distance < 4.00) return true; // returning true cancels the flag
    var health = system.getComponent(data.target, "minecraft:health")
    health.data.value = health.data.max;
    system.applyComponentChanges(data.target, health);
    return false;
}
server.__gcd_events__.flagged.connect('reach', onReach);
```

*Note: there can be multiple listeners, the ones with priority are the first ones to be added*

# Known issues
- If you click fast using knockback 2 on a player or entity, you will get false flagged