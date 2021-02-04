import redux, { createStore } from 'redux';

/**
 * Challenge: set up redux action creators, reducer, and store
 * We'll be building a counter app to start out.
 * Read the comments below for the step-by-step challenges
 */

// 1. Create action creators for having the count "increment" and "decrement"
function increment( count = 1) {
    return {
        type: "INCREMENT",
        payload: count
    }
}

function decrement(count = 1) {
    return {
        type: "DECREMENT",
        payload: count
    }
}

function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + action.payload
        case "INCREMENT":
            return count - action.payload
        default:
            return count
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

export default store;

// 2. Create a reducer to handle your increment and decrement actions

// 3. Create a new Redux store

// 4. Set up the subscribe function so we can more easily see the changes to the Redux state as they happen

// 5. Export the store as a default export
