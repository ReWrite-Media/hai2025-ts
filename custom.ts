// custom.ts
// Custom MakeCode extension file

//% weight=200 color="#0096FF" icon="brain" block="Hour of AI"
namespace hai {
    /**
     * Select Oak Log
     */
    //% block = "`Block.LogOak` oak log"
    export function logOak(): void {
        player.execute("scoreboard players set .output global 1")
    }

    /**
     * Select Birch Log
     */
    //% block = "`Block.LogBirch` birch log"
    export function logBirch(): void {
        player.execute("scoreboard players set .output global 2")
    }

    /**
     * Select Acacia Log
     */
    //% block = "`Block.LogAcacia` acacia log"
    export function logAcacia(): void {
        player.execute("scoreboard players set .output global 3")
    }
}
