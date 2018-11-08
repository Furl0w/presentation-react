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

export const updateDraggedElt = (slid) => {
    return {
        type: 'UPDATE_DRAGGED_ELT',
        obj: slid
    }
}