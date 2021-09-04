import * as types from "./cardActionTypes";

let INITIAL_STATE = {
    cardPairValues: []
}

let cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.UPDATE_CARD_PAIR_VALUES:
            return {
                ...state,
                cardPairValues: action.cardPairValues
            }

        default:
            return state;
    }
}

export default cardReducer;