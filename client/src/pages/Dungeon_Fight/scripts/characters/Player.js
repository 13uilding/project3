import Character from "./Character"

const spellsObj = {
        heal: () => {
            return "heal"
        },
        harden: () => {
            // this.modifiers.defend.harden += 1;
            return "harden"
        },
        sharpen: () => {
            // this.modifiers.defend.sharpen += 1;
            return "sharpen"
        },
        jackpot: () => {
            return "jackpot"
        },
        toughen: () => {
            // this.modifiers.defend.toughen += 1;
            return "toughen"
        },
        cut: () => {
            return "cut"
        },
        tank: () => {
            return "tank"
        },
        retaliate: () => {
            return "retaliate"
        },
        desolate: () => {
            return "desolate"
        },
        slice: () => {
            return "slice"
        }
}

class Player extends Character {
    // These are the initial values that a player starts with
    // Turn this into an object
    constructor({ alive, animation, armor, battleNumber, cards, discardDeck, drawDeck, hand, health, modifiers, 
        name, numDraw, round, selectedCards, spells=spellsObj, sprite, totalArmor, totalHealth }) {
        super( alive, animation, armor, battleNumber, health, modifiers, name, round, sprite, totalHealth, totalArmor )
        // Current cards the player has
        this.cards = cards;
        this.discardDeck = discardDeck;
        this.drawDeck = drawDeck;
        this.hand = hand;
        this.selectedCards = selectedCards;
        this.numDraw = numDraw;
        this.spells = spells;
    }
    attack(type, powerUps) {
        // Refactor
        // gonna have to change this for powerups
        let attackArr = this.selectedCards.map(card => parseInt(card[1]));
        let resultDamage = attackArr.reduce((a, b) => a + b);
        // Made resultType an array so later on we could have multiple effects
        let resultType = [];
        let result = [];
        switch (type) {
            case "desolate":
                resultDamage *= 2;
                resultType.push("desolate");
                break;
            case "cut":
                resultType.push("cut")
                break;
            case "slice":
                resultDamage *= 2;
                break;
            case "jackpot":
                resultDamage += 3 * this.round;
                break;
            case "retaliate":
                this.resultDamage += this.totalHealth - this.health;
                break;
            default:
                break;
        }
        // Sharpen
        resultDamage += this.sharpen;

        result = [resultDamage, resultType];
        // console.log("Result of attack")
        // console.log([result]);
        return result
        }
    castSpell() {
        // gonna have to change this for powerups
        // console.log("Casting the spell");
        let attackArr = this.selectedCards.map(card => parseInt(card[1]));
        let resultDamage = attackArr.reduce((a, b) => a + b);
        let spell = this.determineSpell()
        // console.log("Inside castSpell")
        // console.log(`Health: ${this.health} | Armor: ${this.armor}`)
        switch (spell) {
            case "heal":
                this.health = Math.min(this.health + resultDamage, this.totalHealth)
                break;
            case "harden":
                this.harden += 2
                break;
            case "sharpen":
                this.sharpen += 2
                break;
            case "toughen":
                this.toughen += 2
                break;
            case "tank":
                this.armor = Math.min(this.totalArmor, this.armor + resultDamage * 2)
                break;
            default:
                break;
        }
        // console.log(`Health: ${this.health} | Armor: ${this.armor}`)

        this.health = Math.min(this.totalHealth, this.health + this.toughen)
        this.armor = Math.min(this.totalArmor, this.armor + this.harden)
        // console.log(`Health: ${this.health} | Armor: ${this.armor}`)

        return this.spells[spell]();
    }
    determineSpell() {
        let spell = this.selectedCards.map(card => card[0]).sort().join("");
        // console.log(`Spell ${spell}`);
        switch (spell) {
            case "ppp":
                return "heal"
            case "ppr":
                return "harden"
            case "pps":
                return "sharpen"
            case "prs":
                return "jackpot"
            case "prr":
                return "toughen"
            case "pss":
                return "cut"
            case "rrr":
                return "tank"
            case "rrs":
                return "retaliate"
            case "rss":
                return "desolate"
            case "sss":
                return "slice"
            default:
                return "noSpell"
        }
    }
    drawHand() {
        // console.log("Drawing hand")
        let length = this.drawDeck.length
        if ( length >= this.numDraw ) {
            this.hand = this.drawDeck.splice(0, this.numDraw);
        } else {
            // console.log(`Drawing ${length} from draw deck `)
            this.hand = this.drawDeck.splice(0, length);
            // console.log('Reshuffling')
            this.shuffleCards();
            // console.log(`Drawing ${this.numDraw - length} from shuffled draw deck `)
            this.hand = [...this.hand, ...this.drawDeck.splice(0, this.numDraw - length)];

        }
        // console.log(this.hand)
        // console.log("Remaining drawDeck")
        // console.log(this.drawDeck)
    }
    play() {
        // console.log("Playing hand")
        // console.log(this.selectedCards);
        let type = this.castSpell();
        // opponent
        let attack = this.attack(type);
        // Need to add damage method and spell method
        //! MOVE THIS

        this.discardDeck = [...this.hand.splice(0, this.hand.length), ...this.discardDeck];
        this.selectedCards = [];
        // console.log("Discarding hand")
        // console.log(this.discardDeck)
        return attack
    }
    // STATE
    selectCard(e, action) {
        if ( action === "select" ) {
            this.selectedCards.push(e.target.textContent)
        } else if ( action === "deselect" ) {
            this.selectedCards.splice(this.selectedCards.indexOf(e.target.textContent), 1);
        }
        // event.target.value
        // console.log("Selecting a hand")
    }
    shuffleCards() {
        let shuffleLength = 0;
        let shuffledCards = [];
        let initialShuffle = this.hand.length === 0;
        // If initial shuffle we use the full deck, else we use the discardDeck
        initialShuffle ? (shuffleLength = this.cards.length) : 
            (shuffleLength = this.discardDeck.length);
        let i = 0;
        shuffledCards = new Array(shuffleLength);
        // console.log("Length of new shuffle " + shuffleLength)
        while (i < shuffleLength) {
            let randomIndex = Math.floor(Math.random() * shuffleLength);
            if (shuffledCards[randomIndex] === undefined) {
                initialShuffle ? (shuffledCards[randomIndex] = this.cards[i]) :
                    (shuffledCards[randomIndex] = this.discardDeck[i]);
                    i++;
            }
        }
        this.drawDeck = shuffledCards;
        this.discardDeck = [];
    }
}

export default Player;