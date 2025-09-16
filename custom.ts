// custom.ts
// Custom MakeCode extension file

//% weight=200 color="#0096FF" icon="brain" block="Hour of AI"
namespace hai {
    /**
     * Select Oak Log
     */
    //% block = "`custom.LogOak` oak log"
    //% blockSetVariable = "logType"
    export function logOak(): number {
        return 1;
    }

    /**
     * Select Birch Log
     */
    //% block = "`custom.LogBirch` birch log"
    //% blockSetVariable = "logType"
    export function logBirch(): number {
        return 2;
    }

    /**
     * Select Acacia Log
     */
    //% block = "`custom.LogAcacia` acacia log"
    //% blockSetVariable = "logType"
    export function logAcacia(): number {
        return 3;
    }

    /**
     * Select Oak Log
     */
    //% block = "classify %n as wood"
    export function _classifyWood(n: number): void {
        player.execute(`scoreboard players set .output global ${n}`);
    }




}
