import axios from "axios"

export const editPerson = async (nombre, apellido, alias) => {
    console.log(nombre, apellido, alias)
    if (nombre && apellido && alias !== undefined) {


        try {
            const url = `http://localhost:5000/persona/38`


            const resultPersona = await axios.put(url, nombre)
            if (resultPersona.status === 200) {

                console.log('status ok')
                return (resultPersona.data.persona);
            }
            console.log(url)

        }
        catch (e) {
            console.log(e)
        }
    }
    else {
        console.log('error')
    }
}