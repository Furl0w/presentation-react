//var Tools = require('../services/Tools.js');

import { Comm } from "../services/Comm";

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
            action.obj.id = generateUUID(); // In dev
            // action.obj.id = Comm.getUUID(); // In prod
            newState1.content_map[action.obj.id] = action.obj;
            return newState1;

        default:
            return state;
    }
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

export default updateModelReducer;