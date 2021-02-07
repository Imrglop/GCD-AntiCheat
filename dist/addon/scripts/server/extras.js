server.__gcd_spawn_experience_orb_start__ = function(... args) {
    try { eval('require("bdsx")') } catch (e) { return; }
    const { netevent, PacketId, Actor, NetworkIdentifier, CANCEL } = require('bdsx')
    netevent.raw(PacketId.SpawnExperienceOrb).on((ptr, _size, ni) => {
        ptr.move(1); // packet id
        // vector3
        var pos = []
        for (let i = 0; i < 3; i++) {
            pos[i] = ptr.readFloat32();
        }
        // count
        var count = ptr.readVarInt();
        var entity = ni.getActor().getEntity();
        if (args[0].onFlagged({ networkIdentifier: ni, player, entity, experienceOrbCount: count, pos })) return;
        return CANCEL;
    })
}