import { Check, CheckCategory, ICheck } from "../ICheck";

export class TestCheck extends Check implements ICheck {
    constructor() {
        super(CheckCategory.Misc);
    }

    public override getCheckName(): string {
        return "TestCheck";
    }

    public override getDescription(): string {
        return "yes";
    }
}