// custom.ts
// Custom MakeCode extension file

class SymbolGrid {
    gridText: String
    public constructor(gridText: String) {
        this.gridText = gridText;
    }
}


//% weight=200 color="#D1E400" icon="\uf126" block="HAI Defaults"
namespace defaults {
    //% block="agent training"
    export function customStart(): void {
        // your code here
    }
}

//% weight=200 color="#008106" icon="\uf126" block="Hour of AI"
namespace hai {

    /**
     * Classify a wood log.
     */
    //% block="classify %n as wood"
    //% n.shadow="oaklog"
    //% color="#0096FF"
    export function classifyWood(n: number): void {
        player.execute(`scoreboard players set .output${n} global ${n}`);
    }

    //% blockId=buildagrid block="craft"
    //% imageLiteralColumns=3
    //% imageLiteralRows=3
    //% gridLiteral=1
    export function craftingGrid(grid: string) {
        return new SymbolGrid(grid);
    }

    /**
     * Select Oak Log
     */
    //% block="`custom.logOak` oak log"
    //% blockId=oaklog
    export function logOak(): number {
        return 1;
    }

    /**
     * Select Birch Log
     */
    //% block="`custom.logBirch` birch log"
    //% blockId=birchlog
    export function logBirch(): number {
        return 2;
    }

    /**
     * Select Acacia Log
     */
    //% block="`custom.logAcacia` acacia log"
    //% blockId=acacialog
    export function logAcacia(): number {
        return 3;
    }

    /**
     * Select Grass
     */
    //% block="`custom.Grass` grass"
    //% blockId=grass
    export function grass(): number {
        return 0;
    }

}
