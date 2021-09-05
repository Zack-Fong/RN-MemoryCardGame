import * as types from "./stepActionTypes";

let INITIAL_STATE = {
    stepsTaken: 0
}

let stepReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.UPDATE_STEPS_TAKEN:
            return {
                ...state,
                stepsTaken: state.stepsTaken + 1
            }

        case types.RESET_STEPS_TAKEN:
            return {
                ...state,
                stepsTaken: 0
            }

        default:
            return state;
    }
}

export default stepReducer;