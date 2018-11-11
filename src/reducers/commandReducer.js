const commandReducer = (state = { cmdPres: "" }, action) => {
    switch (action.type) {

        case 'COMMAND_PRESENTATION':
            console.log(action)
            return { ...state, cmdPres: action.obj };

        default:
            return state;
    }
}

export default commandReducer;