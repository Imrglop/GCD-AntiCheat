// manual

const { netevent, PacketId, CANCEL } = require("bdsx");

const system = server.registerSystem(0, 0);

server.__gcd_nbt_start__ = function(... args) {
    netevent.raw(PacketId.InventoryTransaction).on((ptr, _size, ni) =>
{
    ptr.move(3);
    var actor = ni.getActor();
    var entity = actor.getEntity();

    var type2 = ptr.readVarUint();
    ptr.move(1);
    // Read Packet

    const actionType = ptr.readVarUint();

    const XPos = ptr.readVarInt();
    const YPos = ptr.readUint8();
    const ZPos = ptr.readVarInt();
 
    const {
        data:
        {
            x,
            y,
            z
        }
    } = system.getComponent(entity, "minecraft:position");
    var maxDist = 30;
    var otherCondition = (actionType == 0) &&
    (
        (
            Math.abs(parseInt(x) - XPos) > maxDist
        ) ||
        (
            Math.abs(parseInt(y) - YPos) > maxDist
        ) ||
        (
            Math.abs(parseInt(z) - ZPos) > maxDist
        )
    );
    var excludedTTypes = []
    if (actionType == 99999
        || (otherCondition && !(excludedTTypes.includes(type2)))) {// fp fixer?
        // TODO: use ActionType
        return CANCEL;
    }
})
}