import axios from "axios"

export const librosPersona = async () => {

    try {
        const url = 'http://localhost:5000/libro/'

        const resultPersonaLibro = await axios.get(url)

        if (resultPersonaLibro === 200) {
            console.log('conexion establecida')
        }

        return resultPersonaLibro.data.respuesta
    }
    catch (e) { console.log(e) }

}
