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

    public override onEnable(): void {
    }

    public override onDisable(): void {
    }

    public override getDefaultSettings() {
        return {
            "gaming": "yeet",
            "this is a": [
                "test",
                "idk",
                42
            ]
        }
    }
}