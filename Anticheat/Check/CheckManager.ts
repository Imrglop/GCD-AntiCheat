import { Logger } from "../../Logger";
import { KillauraCheck } from "./Checks/KillauraCheck";
import { TestCheck } from "./Checks/TestCheck";
import { Check } from "./ICheck";


export class CheckManager {
    private checks: Check[] = [];

    constructor() {
    }

    public init(): void {
        this.checks.push(new KillauraCheck());
        this.checks.push(new TestCheck());
    }

    public enableChecks(): void {
        for (let check of this.checks) {
            Logger.log("Enable Check " + check.getCheckNameDecorated());
            check.setEnabled(true);
        }
    }

    public disableChecks(): void {
        for (let check of this.checks) {
            Logger.log("Disable Check " + check.getCheckName());
            if (check.isEnabled()) {
                check.setEnabled(false);
            }
        }
    }
}

/**
 * The default check manager
 */
export var checkManager: CheckManager = new CheckManager();