/*
 GCD AntiCheat (V2): A script that prevents players from cheating in certain Minecraft: Bedrock Edition servers.
 Copyright (C) 2021 Imrglop 
*/

/// <reference types="minecraft-scripting-types-server" />

const system = server.registerSystem(0, 0);

import { Check } from './classes/Check';
import { NBT } from './classes/checks/NBT';
import { Reach } from './classes/checks/Reach';
import { config } from './config';

var Checks : Check[] = [];

export var serverStats = {
    MSPT: 50,
    TPS: 20,
    server: {
        serverType: 'vanilla',
        setTimeoutEnabled: false,
        jsConsole: false
    }
}

export function log(... i : any) {
    var finalLog : string = '';
    for (var k of i) {
        switch(i + '') {
            case '[object Object]':
                finalLog += JSON.stringify(i);
                break;
            case '[object Undefined]':
                finalLog += "null";
                break;
            case '[object Null]':
                finalLog += "null";
                break;
            case '[object Array]':
                finalLog += JSON.stringify(i);
                break;
            default:
                finalLog += ((i + ""))
                    .split('\r\n').join('\n'); // mc only uses \n, looks cleaner
                break;
        }
        finalLog += " ";
    }
    if (serverStats.server.jsConsole) {
        console.log(`[${new Date().toLocaleString()}] [GCD] ${finalLog}`)
    } else {
        server.log("[GCD] " + finalLog);
    }
}

function checkServerType() {
    var checksPassed = 0;
    try {
        eval("setTimeout");
        serverStats.server.setTimeoutEnabled = true;
        serverStats.server.serverType = 'modded';
        checksPassed++;
    } catch {}
    try {
        eval("require");
        checksPassed++;
        serverStats.server.serverType = 'any-node';
    } catch {}
    try {
        eval("require(\"bdsx\")");
        checksPassed++;
        serverStats.server.serverType = 'bdsx-node';
    } catch {}
    if (checksPassed > 0) {
        serverStats.server.jsConsole = true;
    }
    log(`Checks passed: ${checksPassed}/3. Detected Server type: ${serverStats.server.serverType}`)
}

function initializeChecks() {
    var checks = config.config.checks;
    if (checks.reach.eanbled) {
        Checks.push(new Reach());
    }
    if (serverStats.server.serverType == 'bdsx-node') {
        Checks.push(new NBT());
    }
}

function shutdownChecks() {
    Checks.forEach(_check => {
        eval('_check.onDisable();');
    });
}

system.initialize = function() {
    checkServerType();
    config.init();
}

system.shutdown = function() {
    shutdownChecks();
}