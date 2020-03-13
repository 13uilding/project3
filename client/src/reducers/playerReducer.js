import { 
    RESET_BATTLE_NUMBER,
    SET_BATTLE_NUMBER,
    SET_CARDS,
    SET_PLAYER,
    SET_PLAYER_HEALTH_ARMOR, 
    SET_PLAYER_SPRITE,
    UPDATE_PLAYER_HEALTH,
    UPDATE_PLAYER_ARMOR,
} from "../actions/types";

const initialState = {
    alive: true,
    battleNumber: 0,
    armor: 50,
    totalArmor: 50,
    health: 50,
    totalHealth: 50,
    cards: ["r1", "r2", "r3", "r4", "r5", "p1", "p2", "p3", "p4", "p5", "s1", "s2", "s3", "s4", "s5"],
    sprite: {    
        character: "player",
        type: "main"}
};

export default function playerReducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {

        case RESET_BATTLE_NUMBER:
            return {
                ...state,
                battleNumber: 0
            };

        case SET_BATTLE_NUMBER:
            return {
                ...state,
                battleNumber: action.payload.number
            };

        case SET_CARDS:
            return {
                ...state,
                cards: action.payload.cards
            };

        case SET_PLAYER: 
            return {
                alive: action.payload.alive,
                animation: action.payload.animation,
                armor: action.payload.armor,
                battleNumber: action.payload.battleNumber,
                cards: action.payload.cards,
                discardDeck: action.payload.discardDeck,
                drawDeck: action.payload.drawDeck,
                hand: action.payload.hand,
                health: action.payload.health,
                modifiers: action.payload.modifiers,
                name: action.payload.name,
                numDraw: action.payload.numDraw,
                round: action.payload.round,
                selectedCards: action.payload.selectedCards,
                sprite: action.payload.sprite,
                totalArmor: action.payload.totalArmor,
                totalHealth: action.payload.totalHealth,
            }

        case SET_PLAYER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.payload.health,
                armor: action.payload.armor,
                alive: action.payload.alive
            };

        case SET_PLAYER_SPRITE:
            return {
                ...state,
                sprite: {
                    character: action.payload.character,
                    type: action.payload.type
                }
            };

        case UPDATE_PLAYER_HEALTH:
            return{
                ...state,
                totalHealth: state.totalHealth + action.payload.value
            };
            
        case UPDATE_PLAYER_ARMOR:
            return{
                ...state,
                totalArmor: state.totalArmor + action.payload.value
            };


        default:
            return state;
    }
}