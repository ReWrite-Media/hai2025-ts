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
        player.say("start");

        // ================== NEW DEBUGGING BLOCK ==================
        // This will print the character code of every character in the raw pattern string.
        // This is the most reliable way to see the true structure of the string.
        let debugString = "";
        for (let i = 0; i < pattern.patternText.length; i++) {
            // Add the character code and a space to our debug string
            debugString += pattern.patternText.charCodeAt(i) + " ";
        }
        player.say("RAW CHAR CODES: " + debugString);
        // =======================================================

        player.say("end");

        const normalizedPattern = pattern.patternText
            .trim()
            .split('\n')
            .map((line: string) =>
                line.split(' ')
                    .map((cell: string) => (cell.toLowerCase() === 'empty' || cell.length === 0 ? '.' : '#'))
                    .join('')
            )
            .join('\n');

        const safeDebugPattern = normalizedPattern.split('#').join('H').split('.').join('o');
        player.say("Normalized and Safe to Print: " + safeDebugPattern);

        // ... your if/else if chain remains the same ...
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
