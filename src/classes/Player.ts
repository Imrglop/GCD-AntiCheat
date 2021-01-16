// ----------- Imports -----------

import { system } from "../index";
import { TagComponent } from "../playerdata";

// ----------- Class -----------

export class Player {
    private vanillaEntity;
    constructor(entity: IEntity) {
        this.vanillaEntity = entity;
    }
    getCoords(): number[] {
        var posComp = system.getComponent(this.vanillaEntity, MinecraftComponent.Position);
        const {
            data: {
                x,
                y,
                z
            }
        } = posComp;
        return [x, y, z];
    }
    getHealth(): number {
        var healthComp = system.getComponent(this.vanillaEntity, MinecraftComponent.Health);
        const {
            data: {
                value
            }
        } = healthComp;
        return value;
    }
    getMaxHealth() : number {
        var healthComp = system.getComponent(this.vanillaEntity, MinecraftComponent.Health);
        const {
            data: {
                max
            }
        } = healthComp;
        return max;
    }
    setHealth(health: number): void {
        var healthComp = system.getComponent(this.vanillaEntity, MinecraftComponent.Health);
        healthComp.data.value = health;
        system.applyComponentChanges(this.vanillaEntity, healthComp);
    }
    getTickingArea(): IEntityTickingArea | null {
        var tickWorld = system.getComponent(this.vanillaEntity, MinecraftComponent.TickWorld);
        if (!tickWorld) return null;
        return tickWorld.data.ticking_area;
    }
    getName(): string {
        var nameComp = system.getComponent(this.vanillaEntity, MinecraftComponent.Nameable);
        if (!nameComp) return '';
        return nameComp.data.name;
    }
    setName(name: string): void {
        var nameComp = system.getComponent(this.vanillaEntity, MinecraftComponent.Nameable);
        if (!nameComp) return;
        nameComp.data.name = name;
        system.applyComponentChanges(this.vanillaEntity, nameComp);
    }
    hasTag(tag: string): boolean {
        var tags : TagComponent = system.getComponent(this.vanillaEntity, "minecraft:tag");
        return tags.data.includes(tag);
    }
    addTag(tag: string): number {
        var tags : TagComponent = system.getComponent(this.vanillaEntity, "minecraft:tag");
        return tags.data.push(tag);
    }
    removeTag(tag: string): void {
        var tags : TagComponent = system.getComponent(this.vanillaEntity, "minecraft:tag");
        var i = 0;
        tags.data.forEach((_tag: string) => {
            if (_tag.toString() == tag.toString()) 
            {
                tags.data[i] = undefined;
                var _tags : any = tags;
                system.applyComponentChanges(this.vanillaEntity, _tags);
                return;
            }
            i++;
        });
    }

}