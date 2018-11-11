const commandReducer = (state = { cmdPres: "" }, action) => {
    switch (action.type) {

        case 'COMMAND_PRESENTATION':
            return { ...state, cmdPres: action.obj };

        default:
            return state;
    }
}

export default commandReducer;