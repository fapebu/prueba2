import { VIEW_ALL_PEOPLE } from '../actions/types'
import { combineReducers } from 'redux'

function mainReducer(state = [], action) {

    switch (action.type) {
        case VIEW_ALL_PEOPLE:
            return [ ...action.payload ];
        default:
            return state
    }
}


export default combineReducers({
    mainReducer
})