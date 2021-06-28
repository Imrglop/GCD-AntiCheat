export namespace Logger {
    export function log(... list: any[]): void {
        console.log("[GCD] [INFO] " + list.join(" "));
    }
    export function error(... list: any[]): void {
        console.error(("[GCD] [ERROR] " + list.join(" ")).red);
    }
    export function warn(... list: any[]): void {
        console.warn(("[GCD] [WARN] " + list.join(" ")).yellow);
    }
}