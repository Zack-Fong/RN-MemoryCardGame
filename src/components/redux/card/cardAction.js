import * as types from "./cardActionTypes";

export const updateCardPairValues = (CARD_PAIRS_VALUE) => (
    {
        type: types.UPDATE_CARD_PAIR_VALUES,
        cardPairValues: CARD_PAIRS_VALUE
    }
)