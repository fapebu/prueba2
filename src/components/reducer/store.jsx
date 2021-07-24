import { createStore } from "redux";


const stateInit = {

}

const reducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'GETDATA':
            const nuevoEstado = state
            nuevoEstado({ ...action.addInfo })
            return nuevoEstado
        default:
            return state
    }
}
export default createStore(reducer)
//types
// const infoOk = 'INFO_VIEW_OK'


// //reducer
// export function reducer(state = stateInit, action) {
//     switch (action.type) {
//         case infoOk:
//             return { ...state, newdata: action.stateInit }//data recibe payload con toda la info
//         default:
//             return state
//     }

// }

//actions


// export default createStore(reducer)