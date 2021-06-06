export const getCounter = {
    incrementRequest: () => ({
        type: "INCREMENT_ASYNC"
    }),
    decrementRequest: () => ({
        type: "DECREMENT_ASYNC"
    })
};