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
            let newState1 = JSON.parse(JSON.stringify(state))
            newState1.content_map[action.obj.id] = action.obj;
            return newState1;

        case 'ADD_SLID':
            let newState2 = JSON.parse(JSON.stringify(state))
            newState2.presentation.slidArray.push(action.obj);
            return newState2;

        case 'REMOVE_SLID':
            let index = state.presentation.slidArray.indexOf(action.obj);
            if (index > -1) {
                state.presentation.slidArray.splice(index, 1);
            }
            return JSON.parse(JSON.stringify(state));

        default:
            return state;
    }
}

export default updateModelReducer;