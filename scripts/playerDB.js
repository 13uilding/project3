/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/roshambo');

const PlayerSeed = [{
    alive: true,
    animation: 'idle',
    armor: 25,
    battleNumber: 0,
    cards: ['r1', 'r2', 'r3', 'r4', 'r5', 'p1', 'p2', 'p3', 'p4', 'p5', 's1', 's2', 's3', 's4', 's5',],
    discardDeck: [],
    drawDeck: [],
    hand: [],
    health: 50,
    modifiers: {
        defend: {
            harden: 0,
            toughen: 0,
        },
        attack: {
            sharpen: 0,
        },
    },
    name: 'Choop',
    numDraw: 5,
    round: 1,
    selectedCards: [],
    sprite: {
        character: 'player',
        type: 'main',
    },
}];

db.Player
    .remove({})
    .then(() => db.Player.collection.insertMany(PlayerSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
