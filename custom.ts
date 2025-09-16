// custom.ts
// Custom MakeCode extension file

//% weight=200 color="#0096FF" icon="brain" block="Hour of AI"
namespace hai {
    /**
     * Select Oak Log
     */
    //% block = "`custom.logOak` oak log"
    //% blockSetVariable = "logType"
    export function logOak(): number {
        return 1;
    }

    /**
     * Select Birch Log
     */
    //% block = "`custom.logBirch` birch log"
    //% blockSetVariable = "logType"
    export function logBirch(): number {
        return 2;
    }

    /**
     * Select Acacia Log
     */
    //% block = "`custom.logAcacia` acacia log"
    //% blockSetVariable = "logType"
    export function logAcacia(): number {
        return 3;
    }

    /**
     * Classify a wood log.
     */
    //% block = "classify %n as wood"
    export function classifyWood(n: number): void {
        player.execute(`scoreboard players set .output${n} global ${n}`);
    }

}
