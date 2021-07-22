import { createStore } from "redux";
import { getListPersona } from '../../services/serviceget';


const stateInit = {
    newdata: [],
}

//types
const infoOk = 'INFO_VIEW_OK'


//reducer
export function reducer(state = stateInit, action) {
    switch (action.type) {
        case infoOk:
            return { ...state, newdata: action.payload }//data recibe payload con toda la info
        default:
            return state
    }

}

//actions
export const infoOfServer = () => async (dispatch, getState) => {
    try {
        const res = await getListPersona()
        dispatch({
            type: infoOk,
            payload: res.data.resultado
        })
    }
    catch (e) { console.log(e) }
}

export default createStore(reducer)