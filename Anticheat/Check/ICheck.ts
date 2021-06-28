export const enum CheckCategory {
    Combat,
    Movement,
    World,
    Exploit,
    Misc
}

export interface ICheck {
    onEnable(): void;
    onDisable(): void;

    getCheckName(): string;
    getDescription(): string;
}

export class Check implements ICheck {
    private category: CheckCategory;
    private enabled: boolean;

    public static overrideErr(funcName: string) {
        throw new Error(`${funcName} is not overridden while required.`);
    }

    constructor(category: CheckCategory) {
        this.category = category;
    }

    public getDescription(): string {
        Check.overrideErr("getDescription");
        return "";
    }

    public getCheckName(): string {
        Check.overrideErr("getCheckName");
        return "";
    }

    public getCategoryName(): string {
        switch(this.category) {
            case CheckCategory.Combat:
                return "Combat";
            case CheckCategory.Exploit:
                return "Exploit";
            case CheckCategory.Movement:
                return "Movement";
            case CheckCategory.World:
                return "World";
            case CheckCategory.Misc:
                return "Miscellaneous"
            default:
                return "Unknown";
        }
    }

    public getCheckNameDecorated(): string {
        return this.getCheckName() + " (" + this.getCategoryName() + ")";
    }

    public onEnable(): void {
    }

    public onDisable(): void {
    }

    public setEnabled(b: boolean): void {
        if (b) {
            this.onEnable();
        } else {
            this.onDisable();
        }
        this.enabled = b;
    }

    public isEnabled(): boolean {
        return this.enabled;
    }
}