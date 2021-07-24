import { createStore } from "redux";



let stateInit = {
    data: {

    }
}


function reducer(state = stateInit, action) {
    const newState = state
    switch (action.type) {
        case 'GET_DATA':
            newState.stateInit.push(action.data)
            return newState
        default:
            return state
    }
}
export default createStore(reducer)
