"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.configName = exports.dirPath = void 0;
// ----------- Imports -----------
const fs_1 = require("fs");
const CheckManager_1 = require("./Anticheat/Check/CheckManager");
const Config_1 = require("./Config");
const Logger_1 = require("./Logger");
// ------------ Main -------------
exports.dirPath = "./GCD";
exports.configName = "config.yml";
exports.config = new Config_1.Config();
if (!fs_1.existsSync(exports.dirPath)) {
    fs_1.mkdirSync(exports.dirPath);
}
var res = exports.config.load(exports.dirPath + "/" + exports.configName);
if (res == false) {
    Logger_1.Logger.error("Could not load the config correctly!");
}
else {
    console.log(Logger_1.Logger.log("Loaded config succesfully."));
}
CheckManager_1.checkManager.init();
CheckManager_1.checkManager.enableChecks();
Logger_1.Logger.log("Loaded.");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrQ0FBa0M7QUFDbEMsMkJBQTJDO0FBQzNDLGlFQUE4RDtBQUM5RCxxQ0FBa0M7QUFDbEMscUNBQWtDO0FBQ2xDLGtDQUFrQztBQUVyQixRQUFBLE9BQU8sR0FBVyxPQUFPLENBQUM7QUFDMUIsUUFBQSxVQUFVLEdBQVcsWUFBWSxDQUFDO0FBQ3BDLFFBQUEsTUFBTSxHQUFXLElBQUksZUFBTSxFQUFFLENBQUM7QUFFekMsSUFBSSxDQUFDLGVBQVUsQ0FBQyxlQUFPLENBQUMsRUFBRTtJQUN0QixjQUFTLENBQUMsZUFBTyxDQUFDLENBQUM7Q0FDdEI7QUFFRCxJQUFJLEdBQUcsR0FBRyxjQUFNLENBQUMsSUFBSSxDQUFDLGVBQU8sR0FBRyxHQUFHLEdBQUcsa0JBQVUsQ0FBQyxDQUFDO0FBRWxELElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtJQUNkLGVBQU0sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztDQUN4RDtLQUFNO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztDQUN6RDtBQUVELDJCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEIsMkJBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUU1QixlQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=