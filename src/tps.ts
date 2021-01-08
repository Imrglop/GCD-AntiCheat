// ----------- Imports -----------

import { updateListeners } from "./index";


// ----------- Exports -----------

var lastUNIX = Date.now();
var thisUNIX = Date.now();

/**
 * @type {number[]}
 */
var _tps: number[] = [];

/**
 * Get the average of a number list.
 */
function average(list: number[]) {
    let x = 0;
    for (let num of list) {
        x += num;
    }
    return x / list.length;
}

/**
 * Gets the server performance.
 */
export function getServerTPS(): number {
    let mspt = average(_tps);
    let __tps = parseFloat((1000 / mspt).toFixed(1));
    return __tps;
}


updateListeners.push(() => {
    thisUNIX = Date.now();
    if (_tps.length > 63) {
        _tps.shift();
    } else {
        _tps.push((thisUNIX - lastUNIX));
    }
    lastUNIX = Date.now();
})