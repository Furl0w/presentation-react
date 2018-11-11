export const setSelectedSlid = (slid_obj) => {
    return {
        type: 'UPDATE_SELECTED_SLID',
        obj: slid_obj
    };
}

export const updateContentMap = (contentMap) => {
    return {
        type: 'UPDATE_CONTENT_MAP',
        obj: contentMap
    }
}

export const updatePresentation = (pres) => {
    return {
        type: 'UPDATE_PRESENTATION',
        obj: pres
    }
}

export const updateSlid = (slid) => {
    return {
        type: 'UPDATE_PRESENTATION_SLIDS',
        obj: slid
    }
}

export const addContent = (content) => {
    return {
        type: 'ADD_CONTENT',
        obj: content
    }
}

export const savePresentation = (pres) => {
    return {
        type: 'SAVE_PRESENTATION',
        obj: pres
    }
}

export const addSlid = (slid) => {
    return {
        type: 'ADD_SLID',
        obj: slid
    }
}

export const removeSlid = (id) => {
    return {
        type: 'REMOVE_SLID',
        obj: id
    }
}

export const sendCommand = (cmd) => {
        return {
            type: 'COMMAND_PRESENTATION',
            obj: cmd
        }
}