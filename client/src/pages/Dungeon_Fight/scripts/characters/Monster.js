import Character from "./Character"

class Monster extends Character {
    constructor({ alive, animation, armor, battleNumber, damage, health, modifiers, name, round, sequence, sprite, totalArmor, totalHealth
    } 
     ) {
        super( alive, animation, armor, battleNumber, health, modifiers, name, round, sprite, totalHealth, totalArmor)
        this.damage = damage;
        this.sequence = sequence;
    }
    attack() {
        // the damage is regular damage
        let low = parseInt(this.damage[0])
        let high = parseInt(this.damage[1])
        return [low + Math.round((high - low) * Math.random()), []]
    }
    block() {
        this.armor += Math.round(this.totalArmor / 10)
        return [0, []];
        }
    taunt() {
        // console.log("This is an insult!");
        return [0, []];
    }
}

export default Monster;