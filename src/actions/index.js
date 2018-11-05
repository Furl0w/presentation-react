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