export const getCounter = (dispatch) => ({
    incrementRequest: () => {
        dispatch({
            type: "increment"
        })
    },
    decrementRequest: () => {
        dispatch({
            type: "decrement"
        })
    }
});