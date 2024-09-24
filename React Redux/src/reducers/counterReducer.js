let initialState = 0;

const Counter = (state = initialState, action) => {
    switch(action.type){
        case 'inc':
            return state + 1;

        default:
            return state;
    }
}