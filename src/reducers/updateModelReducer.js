//var Tools = require('../services/Tools.js');

const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    switch (action.type) {

        case 'UPDATE_PRESENTATION':
            let newState = JSON.parse(JSON.stringify(state))
            newState.presentation = action.obj;
            return newState;

        case 'UPDATE_PRESENTATION_SLIDS':
            let newState0 = JSON.parse(JSON.stringify(state))
            let indexUpdate = newState0.presentation.slidArray.findIndex(e => e.id === action.obj.id)
            newState0.presentation.slidArray[indexUpdate] = action.obj
            return newState0;

        case 'UPDATE_CONTENT_MAP':
            return Object.assign({}, state, { content_map: action.obj })

        case 'ADD_CONTENT':
            let newState1 = JSON.parse(JSON.stringify(state))
            newState1.content_map[action.obj.id] = action.obj;
            return newState1;

        case 'ADD_SLID':
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.presentation.slidArray.push(action.obj);
            return newState2;

        case 'REMOVE_SLID':
            let newState3 = JSON.parse(JSON.stringify(state));

            let index = newState3.presentation.slidArray.findIndex(slid => slid.id === action.obj);
            if (index > -1) {
                newState3.presentation.slidArray.splice(index, 1);
            }
            return newState3;

        default:
            return JSON.parse(JSON.stringify(state));
    }
}

export default updateModelReducer;