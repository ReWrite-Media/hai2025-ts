// custom.ts
// Custom MakeCode extension file

//% weight=200 color="#0000FF" icon="brain" block="Hour of AI"
namespace hai {
    /**
     * Select Oak Log
     */
    //% block = "`block.LogOak` Oak Log"
    export function logOak(): void{
        player.execute("scoreboard players set .output global 1")
    }

    /**
     * Select Oak Log
     */
    //% block = "`block.LogBirch` Oak Log"
    export function logBirch(): void{
        player.execute("scoreboard players set .output global 2")
    }
    
    /**
     * Select Oak Log
     */
    //% block = "`block.LogAcacia` Oak Log"
    export function logAcacia(): void{
        player.execute("scoreboard players set .output global 3")
    }    
}
