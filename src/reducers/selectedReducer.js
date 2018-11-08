const selectedReducer = (state = { slid: {} }, action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_SLID':
            const newState1 = { slid: action.obj };
            return newState1;

        case 'UPDATE_DRAGGED_ELT':
            let newState = JSON.parse(JSON.stringify(state));
            newState.slid.content_id = action.obj
            return newState;

        default:
            return state;
    }
}
export default selectedReducer;