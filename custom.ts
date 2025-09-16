// custom.ts
// Custom MakeCode extension file


//% weight=200 color="#0096FF" icon="\uf126" block="HAI Actions"
namespace actions {
    /**
     * Classify a wood log.
     */
    //% block="classify %n as wood"
    export function classifyWood(n: number): void {
        player.execute(`scoreboard players set .output${n} global ${n}`);
    }
}

//% weight=200 color="#008106" icon="\uf126" block="HAI Values"
namespace values {
    /**
     * Select Oak Log
     */
    //% block="`custom.logOak` Oak"
    export function logOak(): number {
        return 1;
    }

    /**
     * Select Birch Log
     */
    //% block="`custom.logBirch` Birch"
    export function logBirch(): number {
        return 2;
    }

    /**
     * Select Acacia Log
     */
    //% block="`custom.logAcacia` Acacia"
    export function logAcacia(): number {
        return 3;
    }

    /**
     * Select Cobblestone
     */
    //% block="`custom.Cobblestone` Cobblestone"
    export function cobbleStone(): number {
        return 0;
    }

}
