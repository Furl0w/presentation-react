const commandReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLAY':
            const newState1 = { slid: action.obj };
            return newState1;

        default:
            return state;
    }
}

export default commandReducer;