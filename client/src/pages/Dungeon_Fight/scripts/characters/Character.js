//! Store somewhere else?
// var initModifiers = {
//     heal: 0,
//     harden: 0,
//     retaliate: 0,
//     sharpen: 0,
//     toughen: 0,
// }

class Character {
    constructor( alive, animation, armor, battleNumber, health, modifiers, name, round, sprite, totalHealth, totalArmor ) {
        // Character information
        this.alive = alive;
        this.armor = armor;
        this.health = health;
        this.round = round;
        this.modifiers = modifiers;
        this.totalArmor = totalArmor;
        this.totalHealth = totalHealth;
        // Used for react state and animation manipulation
        this.animation = animation
        this.name = name;
        this.battleNumber = battleNumber;
        this.sprite = sprite;
    }
}
Character.prototype.defend = function([damage, type]) {
    // console.log("defending");
    let resultHealth;
    if ( type.length !== 0 ) {
        // Replace this with ef elses late when an attack can have multiple attack types
        switch (type[0]) {
            case "desolate":
                return this.armor = Math.max(this.armor - damage, 0);
            case "cut":
                resultHealth = this.health - damage;
                this.isAlive(resultHealth);
                return this.health = resultHealth;
            default:
                break;
        }
    }
    if ( damage <= this.armor) {
        return this.armor -= damage;
    }
    resultHealth = this.health - ( damage - this.armor )
    this.armor = 0;
    this.isAlive(resultHealth);
    return this.health = resultHealth
}
Character.prototype.isAlive = function(resultHealth) {
    if (resultHealth <= 0) {
        // console.log("Is dead")
        this.alive = false
    } else {
        // console.log("Is alive")
        this.alive = true;
    }
}

export default Character;