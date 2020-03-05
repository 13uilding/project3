import { SET_CHARACTER_HEALTH_ARMOR, SET_CHARACTER_TOTAL_HEALTH, SET_CHARACTER_TOTAL_ARMOR } from "../actions/types";

const initialState = {
    health: 50,
    totalHealth: 50,
    armor: 50,
    totalArmor: 50,
    alive: true,
    character: "Choop"
};

export default function playerStatReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.health,
                armor: action.armor,
                alive: action.alive,
                character: action.character
            };
        case SET_CHARACTER_TOTAL_ARMOR:
            return {
                ...state,
                totalArmor: action.value,
                character: action.character
            };
        case SET_CHARACTER_TOTAL_HEALTH:
            return {
                ...state,
                totalHealth: action.value,
                character: action.character
            };
        default:
            return state;
    }
}