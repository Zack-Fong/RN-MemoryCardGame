import * as types from "./stepActionTypes";

export const updateStepsTaken = () => (
    {
        type: types.UPDATE_STEPS_TAKEN
    }
)

export const resetStepsTaken = () => (
    {
        type: types.RESET_STEPS_TAKEN
    }
)