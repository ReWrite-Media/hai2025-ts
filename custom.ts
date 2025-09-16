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
//% weight=200 color="#0096FF" icon="\uf126" block="HAI Actions"
namespace actions {
    /**
     * Classify a wood log.
     */
    //% block="classify %n as wood"
    //% n.shadow="logvalue"
    export function classifyWood(n: number): void {
        player.execute(`scoreboard players set .output${n} global ${n}`);
    }
}

//% weight=200 color="#008106" icon="\uf126" block="HAI Values"
namespace values {

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
    //% blockId=logvalue
    export function logOak(): number {
        return 1;
    }

    /**
     * Select Birch Log
     */
    //% block="`custom.logBirch` birch log"
    //% blockId=logvalue
    export function logBirch(): number {
        return 2;
    }

    /**
     * Select Acacia Log
     */
    //% block="`custom.logAcacia` acacia log"
    //% blockId=logvalue
    export function logAcacia(): number {
        return 3;
    }

    /**
     * Select Grass
     */
    //% block="`custom.Grass` grass"
    //% blockId=logvalue
    export function grass(): number {
        return 0;
    }

}
