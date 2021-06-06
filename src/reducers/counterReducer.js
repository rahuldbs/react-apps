const INITIAL_STATE = {
    counter: 0,
    inProgress: false
}

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 1,
                inProgress: false
            };
        case "DECREMENT":
            return {
                counter: state.counter - 1,
                inProgress: false
            };
        case "REQUEST":
            return {
                ...state,
                inProgress: true
            }
        default:
            return state;
    }
};