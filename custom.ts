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
     * Select block to craft with.
     */
    //% block="craft with %n"
    //% n.shadow="ghostBlock"
    //% color="#0096FF"
    export function craftWith(n: number): void {
        player.execute(`scoreboard players set .output${n} global 1`);
    }

    /**
     * Select Wood
     */
    //% block="`custom.PlanksOak` wood"
    export function wood(): number {
        return 1;
    }

    /**
     * Select Stick
     */
    //% block="`custom.Stick` stick"
    export function stick(): number {
        return 2;
    }

    /**
     * Select Cobblestone
     */
    //% block="`custom.Cobblestone` cobblestone"
    export function cobblestone(): number {
        return 3;
    }

    /**
     * Train agent crafting.
     */
    //% block="crafting grid %pattern"
    //% blockid="craft"
    //% color="#0096FF"
    export function crafting(pattern: CraftPattern): void {
        // These lines help you see the raw input in chat for debugging
        player.say("start");
        player.say(pattern.patternText);
        player.say("end");

        // This cleans the pattern string by removing all extra whitespace
        // from the beginning, end, and from each individual line.
        const normalizedPattern = pattern.patternText
            .split(' ').join('.')  // FIX 1: Replaced regex with split/join for compatibility.
            .trim()
            .split('\n')
            .map((line: string) => line.trim()) // FIX 2: Added explicit 'string' type for the 'line' parameter.
            .join('\n');

        player.say("start normalized pattern");
        player.say(normalizedPattern);
        player.say("end");

        // All comparisons now use the 'normalizedPattern' variable
        // and correctly formatted strings with '\n' for new lines.
        if (normalizedPattern === `##\n##`) {
            // Crafted crafting bench
            player.execute(`scoreboard players set .output4 global 1`);
        } else if (
            normalizedPattern === `#..\n#..\n...` || normalizedPattern === `.#.\n.#.\n...` ||
            normalizedPattern === `..#\n..#\n...` || normalizedPattern === `...\n#..\n#..` ||
            normalizedPattern === `...\n.#.\n.#.` || normalizedPattern === `...\n..#\n..#` ||
            normalizedPattern === `#..\n#..` || normalizedPattern === `.#.\n.#.` ||
            normalizedPattern === `..#\n..#`
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
        } else {
            // Pattern did not match any recipe
            player.execute(`scoreboard players set .output0 global 1`);
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
        player.say("start 3x3");
        player.say(pattern)
        player.say("end")
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
        player.say("start 2x2");
        player.say(pattern)
        player.say("end")
        return new CraftPattern(pattern);
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
