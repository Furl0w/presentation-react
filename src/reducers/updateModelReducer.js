//var Tools = require('../services/Tools.js');
const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            return; //TO DO
        case 'UPDATE_PRESENTATION_SLIDS':
            return; //TO DO
        case 'UPDATE_CONTENT_MAP':
            const newState1 = { content_map: action.obj };
            return newState1;
        case 'ADD_CONTENT':
            return; //TO DO
        default:
            return state;
    }
}
export default updateModelReducer;