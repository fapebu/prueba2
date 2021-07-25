let stateInit = {
    persona: 'juan'
}


const mainReducer = (state = stateInit, action) => {
    if (action.type === "VIEW_PEOPLE") {
        return {
            ...state,
            persona: action.persona

        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer