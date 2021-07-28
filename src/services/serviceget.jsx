import axios from "axios"

export const getListPersona = async () => {
    try {

        const url = 'http://localhost:5000/persona/'


        const resultPersona = await axios.get(url)

        if (resultPersona.status === 200) {
            console.log('conexion establecida')
        }

        return resultPersona.data.respuesta
    }
    catch (e) {
        console.log(e)
        return [ e.resultPersona.data ]
    }
}

export const getListPersonaId = async (id = 0) => {
    try {

        const url = `http://localhost:5000/persona/${ id }`
        const resultPersonaId = await axios.get(url)
        if (resultPersonaId.status === 200) {
            console.log('conexion establecida')
        }

        const viewPersonId = resultPersonaId.data.respuesta
        return [ ...viewPersonId ]
    }
    catch (e) { console.log(e) }
}






