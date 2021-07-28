import { createStore } from "redux";


const stateInit = {
    listadopersona: [],
}

function reducer(state = stateInit, action) {

    const nuevoStatePersona = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        case 'GET_MOSTRAR_PERSONAS':
            nuevoStatePersona.listadopersona = action.listado
            return nuevoStatePersona

        case 'GET_UNICA_PERSONA':
            nuevoStatePersona.listadopersona = nuevoStatePersona.listadopersona.filter((element) => element.id !== action.idMostrar)
            return nuevoStatePersona

        case 'BORRAR_PERSONA':
            nuevoStatePersona.listadopersona = nuevoStatePersona.listadopersona.filter((elemento) => elemento.id !== action.idRemove)
            return nuevoStatePersona
        default:
            return state

    }
}


export default createStore(reducer)