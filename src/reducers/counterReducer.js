const INITIAL_STATE = {
    counter: 0
}

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "increment":
            console.log("increment");
            return {
                counter: state.counter + 1
            };
        case "decrement":
            return {
                counter: state.counter -1
            };
        default:
            return state;
    }
};