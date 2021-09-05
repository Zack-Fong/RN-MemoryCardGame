import * as types from "./cardActionTypes";

export const resetCardPairValues = () => (
    {
        type: types.RESET_CARD_PAIR_VALUES
    }
)

export const updateCardPairValues = (cardPairValuesIndex, updatedCardPairValues) => (
    {
        type: types.UPDATE_CARD_PAIR_VALUES,
        cardPairValuesIndex,
        updatedCardPairValues
    }
)