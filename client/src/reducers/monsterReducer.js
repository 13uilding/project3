import { SET_MONSTER, SET_MONSTER_HEALTH_ARMOR, SET_MONSTER_SPRITE } from "../actions/types";

const initialState = {
    name: "yellow_minotaur",
    health: 25,
    armor: 10,
    totalHealth: 25,
    totalArmor: 10,
    damage: [5, 15],
    alive: true,
    sequence: ["attack"],
    order: 0,
    sprite: {
        character: "enemy",
        type: "one"
    }
};

export default function monsterReducer(state = initialState, action) {
    let monsterSprite = {}
    switch (action.battleNumber) {
        case (0):
            monsterSprite = {
                character: "enemy",
                type: "one"
            };
            break;
        case (1):
            monsterSprite = {
                character: "enemy",
                type: "two"
            };
            break;
        case (2):
            monsterSprite = {
                character: "enemy",
                type: "three"
            };
            break;
        case (3):
            monsterSprite = {
                character: "boss",
                type: "one"
            };
            break;
        case (4):
            monsterSprite = {
                character: "boss",
                type: "two"
            };
            break;
        case (5):
            monsterSprite = {
                character: "boss",
                type: "three"
            };
            break;
        default:
            monsterSprite = {
                character: "enemy",
                type: "one"
            };
            break;
    }
    switch (action.type) {
        case SET_MONSTER:
            return {
                alive: action.payload.alive,
                animation: action.payload.animation,
                armor: action.payload.armor,
                battleNumber: action.payload.battleNumber,
                damage: action.payload.damage,
                health: action.payload.health,
                modifiers: action.payload.modifiers,
                name: action.payload.name,
                round: action.payload.round,
                sequence: action.payload.sequence,
                sprite: action.payload.sprite,
                totalArmor: action.payload.totalArmor,
                totalHealth: action.payload.totalHealth
            };
        case SET_MONSTER_HEALTH_ARMOR:
            return {
                ...state,
                alive: action.payload.alive,
                armor: action.payload.armor,
                health: action.payload.health
            };
        case SET_MONSTER_SPRITE:
            return {
                ...state,
                sprite: monsterSprite
            };
        default:
            return state;
    }
}