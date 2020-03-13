/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/roshambo'
);

const monsterSeed = [
    // Copy this seed if you are making a new one
    {
        alive: true,
        animation: 'idle',
        armor: 20,
        battleNumber: 4,
        damage: [23, 35],
        health: 40,
        modifiers: {},
        name: 'fire',
        round: 1,
        sequence: ['attack', 'attack', 'taunt'],
        sprite: {
            character: 'boss',
            type: 'two'
        },
        totalArmor: 20,
        totalHealth: 40,
    },
    {
        name: 'ice',
        animation: 'idle',
        modifiers: {},
        health: 80,
        armor: 30,
        totalHealth: 80,
        totalArmor: 30,
        damage: [15, 25],
        sequence: ['attack', 'block', 'taunt'],
        alive: true,
        round: 1,
        battleNumber: 3,
        sprite: {
            character: 'boss',
            type: 'three'
        },
    },
    {
        name: 'earth',
        animation: 'idle',
        modifiers: {},
        health: 40,
        armor: 40,
        totalHealth: 40,
        totalArmor: 40,
        damage: [15, 22],
        sequence: ['block', 'taunt', 'attack'],
        alive: true,
        round: 1,
        battleNumber: 5,
        sprite: {
            character: 'boss',
            type: 'one'
        },
    },
    {
        name: 'minotaur_yellow',
        animation: 'idle',
        modifiers: {},
        health: 25,
        armor: 10,
        totalHealth: 25,
        totalArmor: 10,
        damage: [5, 15],
        sequence: ['attack', 'block', 'taunt'],
        alive: true,
        round: 1,
        battleNumber: 0,
        sprite: {
            character: 'enemy',
            type: 'one'
        },
    },
    {
        name: 'minotaur_purple', 
        animation: 'idle',
        modifiers: {},
        health: 35,
        armor: 10,
        totalHealth: 35,
        totalArmor: 10,
        damage: [8, 18],
        sequence: ['attack', 'block'],
        alive: true,
        round: 1,
        battleNumber: 1,
        sprite: {
            character: 'enemy',
            type: 'two'
        },
    },
    {
        name: 'minotaur_green',
        animation: 'idle',
        modifiers: {},
        health: 45,
        armor: 15,
        totalHealth: 45,
        totalArmor: 15,
        damage: [10, 20],
        sequence: ['attack', 'attack', 'block'],
        alive: true,
        round: 1,
        battleNumber: 2,
        sprite: {
            character: 'enemy',
            type: 'three'
        },
    },
];

db.Monster
    .remove({})
    .then(() => db.Monster.collection.insertMany(monsterSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
