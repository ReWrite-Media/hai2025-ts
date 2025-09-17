// custom.ts
// Custom MakeCode extension file

class CraftPattern {
    patternText: String
    public constructor(patternText: String) {
        this.patternText = patternText;
    }
}

//% weight=200 color="#008106" icon="\uf126" block="Hour of AI"
namespace hai {

    /**
     * Train agent crafting.
     */
    //% block="train crafting %pattern"
    //% blockid="craft"
    //% color="#0096FF"
    export function crafting(pattern: CraftPattern): void {
        if (pattern.patternText === `
        ##
        ##`) {
            // crafted crafting bench
            player.execute(`scoreboard players set .output1 global 1`);
        } else if (pattern.patternText === `
        ###
        .#.
        .#.`) {
            // crafted pickaxe
            player.execute(`scoreboard players set .output2 global 2`);
        } else {
            player.execute(`scoreboard players set .output global 0`);
        }
    }


    /**
     * 3x3 Crafting Grid.
     */
    //% blockId=craftPattern block="3x3"
    //% imageLiteralColumns=3
    //% imageLiteralRows=3
    //% gridLiteral=1

    export function craftingPattern(pattern: string) {
        return new CraftPattern(pattern);
    }

    /**
     * 2x2 Crafting Grid.
     */
    //% blockId=pocketcraftPattern block="2x2"
    //% imageLiteralColumns=2
    //% imageLiteralRows=2
    //% gridLiteral=1
    export function pocketcraftingPattern(pattern: string) {
        return new CraftPattern(pattern);
    }

    /**
     * 2x2 Ghost Grid.
     */
    //% blockId=ghostPattern block=" "
    //% imageLiteralColumns=0
    //% imageLiteralRows=0
    //% gridLiteral=1
    //% color="#8E8E8E"

    export function ghostPattern(pattern: string) {
        return new CraftPattern(pattern);
    }

    /**
     * Classify a wood log.
     */
    //% block="classify %n as wood"
    //% n.shadow="ghostBlock"
    //% color="#0096FF"
    export function classifyWood(n: number): void {
        player.execute(`scoreboard players set .output${n} global ${n}`);
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

    /**
     * Ghost Block
     */
    //% block="`custom.Ghost`"
    //% color="#8E8E8E"
    //% blockId=ghostBlock
    export function ghostBlock(): number {
        return 0;
    }

}
