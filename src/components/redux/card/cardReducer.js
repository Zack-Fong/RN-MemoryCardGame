import * as types from "./cardActionTypes";
import { getNumberOfPlayCards, generatePairsOfUniqueNumbers } from "../../../common/functions";

let INITIAL_STATE = {
    cardPairValues: generatePairsOfUniqueNumbers(getNumberOfPlayCards(), true)
}

let cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESET_CARD_PAIR_VALUES:
            return {
                ...state,
                cardPairValues: generatePairsOfUniqueNumbers(getNumberOfPlayCards(), true)
            }

        case types.UPDATE_CARD_PAIR_VALUES:
            let cardPairValues = [...state.cardPairValues];
            cardPairValues[action.cardPairValuesIndex] = action.updatedCardPairValues;

            return {
                ...state,
                cardPairValues: cardPairValues
            }

        default:
            return state;
    }
}

export default cardReducer;