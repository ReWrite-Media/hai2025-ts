// custom.ts
// Custom MakeCode extension file

class CraftPattern {
    patternText: String
    public constructor(patternText: String) {
        this.patternText = patternText;
    }
}

//% weight=200 color="#0096FF" icon="\uf126" block="Hour of AI"
namespace haiInputs {

    /**
     * Select block to craft with.
     */
    //% block="craft with %n"
    //% n.shadow="ghostBlock"
    //% color="#0096FF"
    export function craftWith(n: number): void {
        player.execute(`scoreboard players set .output${n} global 1`);
    }

}

//% weight=200 color="#008106" icon="\uf126" block="Hour of AI"
namespace hai {

    // INPUTS
    // These functions set scoreboard values based on user selections.

    /**
     * Select block to craft with.
     */
    //% block="craft with %n"
    //% n.shadow="ghostBlock"
    //% color="#0096FF"
    export function craftWith(n: number): void {
        player.execute(`scoreboard players set .output${n} global 1`);
    }

    /**
     * Train agent crafting.
     */
    //% block="crafting grid %pattern"
    //% blockid="craft"
    //% color="#0096FF"
    export function crafting(pattern: CraftPattern): void {

        // This simple logic removes space delimiters and trims extra newlines.
        const normalizedPattern = pattern.patternText
            .split(' ').join('')
            .trim();

        // This if/else if chain should now work perfectly.
        if (
            normalizedPattern === `##\n##` ||             // The original 2x2 pattern
            normalizedPattern === `##.\n##.\n...` ||    // Top-left 2x2 in a 3x3
            normalizedPattern === `.##\n.##\n...` ||    // Top-right 2x2 in a 3x3
            normalizedPattern === `...\n##.\n##.` ||    // Bottom-left 2x2 in a 3x3
            normalizedPattern === `...\n.##\n.##`      // Bottom-right 2x2 in a 3x3
        ) {
            // Crafted crafting bench
            player.execute(`scoreboard players set .output4 global 1`);
        } else if (
            normalizedPattern === `#.\n#.` || normalizedPattern === `.#\n.#` || // Stick patterns for 2x2
            normalizedPattern === `#..\n#..\n...` || normalizedPattern === `.#.\n.#.\n...` ||
            normalizedPattern === `..#\n..#\n...` || normalizedPattern === `...\n#..\n#..` ||
            normalizedPattern === `...\n.#.\n.#.` || normalizedPattern === `...\n..#\n..#`
        ) {
            // Crafted stick or torch
            player.execute(`scoreboard players set .output5 global 1`);
        } else if (normalizedPattern === `###\n.#.\n.#.`) {
            // Crafted pickaxe
            player.execute(`scoreboard players set .output6 global 1`);
        } else if (normalizedPattern === `##.\n##.\n.#.` || normalizedPattern === `.##\n.##\n.#.`) {
            // Crafted axe
            player.execute(`scoreboard players set .output7 global 1`);
        } else if (
            normalizedPattern === `.#.\n.#.\n.#.` || normalizedPattern === `#..\n#..\n#..` ||
            normalizedPattern === `..#\n..#\n..#`
        ) {
            // Crafted shovel
            player.execute(`scoreboard players set .output8 global 1`);
        } else if (
            normalizedPattern === `##.\n##.\n##.` || normalizedPattern === `.##\n.##\n.##`
        ) {
            // Crafted door
            player.execute(`scoreboard players set .output9 global 1`);
        } else if (
            normalizedPattern === `###\n#.#\n###`
        ) {
            // Crafted furnace
            player.execute(`scoreboard players set .output10 global 1`);
        } else if (
            normalizedPattern === `...\n###\n###` || normalizedPattern === `###\n###\n...`
        ) {
            // Crafted bed
            player.execute(`scoreboard players set .output11 global 1`);
        } else if (
            // Shears Patterns
            // 2x2 Grid
            normalizedPattern === `#.\n.#` ||
            normalizedPattern === `.#\n#.` ||

            // 3x3 Grid (Top-Left to Bottom-Right Diagonal)
            normalizedPattern === `#..\n.#.\n...` ||
            normalizedPattern === `.#.\n..#\n...` ||
            normalizedPattern === `...\n#..\n.#.` ||
            normalizedPattern === `...\n.#.\n..#` ||

            // 3x3 Grid (Top-Right to Bottom-Left Diagonal)
            normalizedPattern === `.#.\n#..\n...` ||
            normalizedPattern === `..#\n.#.\n...` ||
            normalizedPattern === `...\n.#.\n#..` ||
            normalizedPattern === `...\n..#\n.#.`
        ) {
            // Crafted shears
            player.execute(`scoreboard players set .output12 global 1`);
        } else {
            // Pattern did not match any recipe
            player.execute(`scoreboard players set .output0 global 1`);
        }
    }

    /**
     * Classify a wood log.
     */
    //% block="classify %n as wood"
    //% n.shadow="ghostBlock"
    //% color="#0096FF"
    export function classifyWood(n: number): void {
        player.execute(`scoreboard players set .output${n} global 1`);
    }

    /**
    * Upgrade tools material.
    */
    //% block="upgrade %t to %m"
    //% t.shadow="ghostItem"
    //% m.shadow="ghostBlock"
    //% color="#0096FF"   
    export function upgradeTool(t: number, m: number): void {
        player.execute(`scoreboard players set .output${t} global ${m}`);
    }

    /**
    * House Materials
    */
    //% block="building material %b"
    //% b.shadow="ghostBlock"
    //% color="#0096FF"   
    export function buildingMaterials(b: number): void {
        player.execute(`scoreboard players set .output${b} global 1`);
    }

    /**
    * Classify as ore
    */
    //% block="classify %b as ore"
    //% b.shadow="ghostBlock"
    //% color="#0096FF"   
    export function classifyOre(b: number): void {
        player.execute(`scoreboard players set .output${b} global 1`);
    }

    //VALUES
    // These functions return constant values representing different items.

    // BLOCKS

    /**
     * Select Wood
     */
    //% block="`custom.PlanksOak` wood"
    export function wood(): number {
        return 1;
    }

    /**
     * Select Cobblestone
     */
    //% block="`custom.Cobblestone` cobblestone"
    export function cobblestone(): number {
        return 3;
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
     * Select Coal Ore
     */
    //% block="`custom.CoalOre` coal ore"
    //% blockId=coalore
    export function coalOre(): number {
        return 4;
    }

    /**
     * Select Iron Ore
     */
    //% block="`custom.IronOre` iron ore"
    //% blockId=ironore
    export function IronOre(): number {
        return 5;
    }

    /**
     * Select Wool
     */
    //% block="`custom.Wool` wool"
    //% blockId=wool
    export function wool(): number {
        return 6;
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

    // CRAFTING INGREDIENTS

    /**
     * Coal
     */
    //% block="`custom.Coal` coal"
    //% blockId=coal
    export function coal(): number {
        return 21;
    }

    /**
     * Iron Ingot
     */
    //% block="`custom.IronIngot`"
    //% blockId=ironIngot
    export function ironIngot(): number {
        return 22;
    }

    // ITEMS    

    /**
     * Select Stick
     */
    //% block="`custom.Stick` stick"
    export function stick(): number {
        return 2;
    }

    /**
     * Select Pickaxe
     */
    //% block="`custom.WoodenPickaxe` pickaxe"
    //% blockId=pickaxe
    export function pickaxe(): number {
        return 1;
    }

    /**
     * Select Axe
     */
    //% block="`custom.WoodenAxe` axe"
    //% blockId=axe
    export function axe(): number {
        return 2;
    }

    /**
     * Select Pickaxe
     */
    //% block="`custom.WoodenShovel` shovel"
    //% blockId=shovel
    export function shovel(): number {
        return 3;
    }

    /**
     * Ghost Item
     */
    //% block="`custom.GhostItem`"
    //% color="#8E8E8E"
    //% blockId=ghostItem
    export function ghostItem(): number {
        return 0;
    }

    // CRAFTING GRIDS

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
     * 3x3 Crafting Grid.
     */
    //% blockId=craftPattern block="3x3"
    //% imageLiteralColumns=3
    //% imageLiteralRows=3
    //% gridLiteral=1

    export function craftingPattern(pattern: string) {
        return new CraftPattern(pattern);
    }

}
