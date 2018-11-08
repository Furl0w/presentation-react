//var Tools = require('../services/Tools.js');
const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    console.log(action);
    switch (action.type) {

        case 'UPDATE_PRESENTATION':
            return Object.assign({}, state, { presentation: action.obj })

        case 'UPDATE_PRESENTATION_SLIDS':
            let newState = JSON.parse(JSON.stringify(state))
            let indexUpdate = newState.presentation.slidArray.findIndex(e => e.id === action.obj.id)
            newState.presentation.slidArray[indexUpdate] = action.obj
            return newState;

        case 'UPDATE_CONTENT_MAP':
            return Object.assign({}, state, { content_map: action.obj })

        case 'ADD_CONTENT':
            return; //TO DO
            
        default:
            return state;
    }
}
export default updateModelReducer;