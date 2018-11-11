const commandReducer = (state = { cmdPres: "", params: {} }, action) => {
    switch (action.type) {

        case 'COMMAND_PRESENTATION':
            return { ...state, cmdPres: action.obj.cmdPres, params: action.obj.params };

        default:
            return {...state};
    }
}

export default commandReducer;