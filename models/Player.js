const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    alive: {
        type: Boolean,
        required: true,
    },
    animation: {
        type: String,
        required: true,
    },
    armor: {
        type: Number,
        required: true,
    },
    battleNumber: {
        type: Number,
        required: true,
    },
    cards: {
        type: Array,
        required: true,
    },
    discardDeck: {
        type: Array,
        required: true,
    },
    drawDeck: {
        type: Array,
        required: true,
    },
    hand: {
        type: Array,
        required: true,
    },
    health: {
        type: Number,
        required: true,
    },
    modifiers: {
        type: {},
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    numDraw: {
        type: Number,
        required: true,
    },
    round: {
        type: Number,
        required: true,
    },
    selectedCards: {
        type: Array,
        required: true,
    },
    spells: {
        type: Array,
        required: true,
    },
    sprite: {
        type: {},
        required: true,
    },
    totalHealth: {
        type: Number,
        required: true,
    },
    totalArmor: {
        type: Number,
        required: true,
    },
});

module.exports = Player = mongoose.model("player", PlayerSchema);