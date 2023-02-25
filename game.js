import {Pokemon} from "./import.mjs";
import * as coefficientCalculator from "./export.mjs"

const pokemon1 = new Pokemon("electric", 9,2);

const pokemon2 = new Pokemon("water", 4,4);

const damage = (heroType, opponentType, attackPower, opponentDefence) => {
    let coff = coefficientCalculator.calculateCoef(heroType, opponentType);
    return 50 * (attackPower / opponentDefence) * coff;
}

console.log(damage(pokemon1.type, pokemon2.type, pokemon1.attack, pokemon2.defense));

