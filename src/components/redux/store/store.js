import { createStore } from "redux";


const stateInit = {
    listadopersona: [],
}

function reducer(state = stateInit, action) {
    const nuevoStatePersona = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GET_PERSONAS':
            nuevoStatePersona.listadopersona = action.listado
            return nuevoStatePersona
        case 'POST_PERSONA':
            nuevoStatePersona.listadopersona.push(action.listadopersona)
            return nuevoStatePersona
        default:
            return state

    }
}


export default createStore(reducer)