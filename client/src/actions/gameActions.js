import { 
    RESET_BATTLE_NUMBER,
    RESET_STATS_ROUND,
    SET_ALL_MONSTERS,
    SET_BATTLE_NUMBER, 
    SET_CARDS,
    SET_MONSTER,
    SET_MONSTER_ANIMATION,
    SET_MONSTER_HEALTH_ARMOR,
    SET_MONSTER_SPRITE,
    SET_PLAYER, 
    SET_PLAYER_ANIMATION,
    SET_PLAYER_HEALTH_ARMOR, 
    SET_PLAYER_SPRITE,
    SET_STATS_PLAYER_DAMAGE,
    SET_STATS_MONSTER_DAMAGE,
    SET_STATS_TOTAL_DAMAGE,
    SET_STATS_ROUND,
    UPDATE_PLAYER_HEALTH,
    UPDATE_PLAYER_ARMOR
} from "./types";

//! Use this action on the loot page
export const setCards = (cards) => {
    return {
        //! This should do an axios update ran on the loot page
        type: SET_CARDS, 
        payload: {cards}
    }
} 

// HEALTH ARMOR ACTIONS PLAYER
export const setHealthArmor = (health, armor, alive) => {
    // PLAYER should be the name of the class, value should be the updated health object
    return {
        type: SET_PLAYER_HEALTH_ARMOR, 
        payload: {health, armor, alive}
    }
};

//! Use this action on landing
export const setPlayer = (player) => {
    return {
        //! This should do an axios update ran on the loot page
        type: SET_PLAYER, 
        payload: player
    }
} 
export const setPlayerAnimation = (animation) => {
    return {
        type: SET_PLAYER_ANIMATION,
        payload: { animation }
    }
}
export const setPlayerSprite = (character, type) => {
    return {
        type: SET_PLAYER_SPRITE,
        payload: { character, type }
    }
}

// updating armor from lootpage
export const updateTotalHealth = value => {
    // PLAYER should be the name of the class, value should be the updated health object
    return {
        type: UPDATE_PLAYER_HEALTH, 
        payload: {value}
    }
};
// update armor from lootpage
export const updateTotalArmor = value => {
    // PLAYER should be the name of the class, value should be the updated health object
    return {
        type: UPDATE_PLAYER_ARMOR, 
        payload: {value}
    }
};


//!
// SET ALL MONSTERS
export const setAllMonsters = (monsters) => {
    return { type: SET_ALL_MONSTERS, monsters }
}

export const setMonster = (monster) => {
    // battleNumber should be the name of the class, value should be the updated health object
    return {
        type: SET_MONSTER, 
        payload: monster
    }
};

export const setMonsterAnimation = (animation) => {
    return {
        type: SET_MONSTER_ANIMATION,
        payload: { animation }
    }
}
// HEALTH ARMOR ACTIONS MONSTER
export const setMonsterHealthArmor = (health, armor, alive) => {
    // battleNumber should be the name of the class, value should be the updated health object
    return {
        type: SET_MONSTER_HEALTH_ARMOR, 
        payload: { health, armor, alive }
    }
};
// needed?
export const setMonsterSprite = (character, type) => {
    return {
        type: SET_MONSTER_SPRITE,
        payload: { character, type }
    }
}


// Stats
export const resetStatsRound = () => {
    return {
        type: RESET_STATS_ROUND
    }
}
export const setStatsPlayerDamage = (damage) => {
    return {
        type: SET_STATS_PLAYER_DAMAGE,
        payload: { damage }
    }
}
export const setStatsMonsterDamage = (damage) => {
    return {
        type: SET_STATS_MONSTER_DAMAGE,
        payload: { damage }
    }
}
export const setStatsTotalDamage = () => {
    return {
        type: SET_STATS_TOTAL_DAMAGE,
    }
}
export const setStatsRound = () => {
    return {
        type: SET_STATS_ROUND
    }
}



// Battle number determines which monster to fight and how many are dead
//! Use this action on the loot page
export const setBattleNumber = (number) => {
    return { type: SET_BATTLE_NUMBER, payload: {number} }
}
//! Use this action on the game over page
export const resetBattleNumber = () => {
    return { type: RESET_BATTLE_NUMBER }
}