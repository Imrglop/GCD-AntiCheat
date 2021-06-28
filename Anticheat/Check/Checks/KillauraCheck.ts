import { Check, CheckCategory, ICheck } from "../ICheck";

export class KillauraCheck extends Check implements ICheck {
    constructor() {
        super(CheckCategory.Combat);
    }

    public override getCheckName(): string {
        return "KillAura";
    }

    public override getDescription(): string {
        return "Checks if a player is attacking entities incorrectly";
    }
}