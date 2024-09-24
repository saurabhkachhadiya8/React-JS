let initialState = 0;

const Counter = (state = initialState, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1;

        case 'dec':
            return state > 0 ? state - 1 : state;

        case 'rst':
            return initialState;

        default:
            return state;
    }
}
export default Counter;