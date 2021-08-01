import { Logger } from "../../Logger";
import { KillauraCheck } from "./Checks/KillauraCheck";
import { TestCheck } from "./Checks/TestCheck";
import { CrasherCheck } from "./Checks/CrasherCheck";
import { Check } from "./ICheck";
import { isDebugMode } from "../..";

export class CheckManager {
    private checks: Check[] = [];

    constructor() {
    }

    public init(): void {
        this.checks.push(new KillauraCheck());
        if (isDebugMode) {
            this.checks.push(new TestCheck());
        }
        this.checks.push(new CrasherCheck());
    }

    public enableChecks(): void {
        for (let check of this.checks) {
            check.setEnabled(check.getCurrentSettings()["Enabled"]);
            if (check.isEnabled()) {
                Logger.log("Enable Check " + check.getCheckNameDecorated());
            }
        }
    }

    public disableChecks(): void {
        for (let check of this.checks) {
            if (check.isEnabled()) {
                Logger.log("Disable Check " + check.getCheckName());
                check.setEnabled(false);
            }
        }
    }

    public getChecks() {
        return this.checks;
    }
}

/**
 * The default check manager
 */
export var checkManager: CheckManager = new CheckManager();