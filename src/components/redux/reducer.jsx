let stateInit = {
    person: 'pepe'
}


const mainReducer = (state = stateInit, action) => {
    if (action.type === "VIEW_PEOPLE") {
        return {
            ...state,
            person: action.person

        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer