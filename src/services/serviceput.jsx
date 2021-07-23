import axios from "axios"

export const editPerson = async (nombre, apellido, alias) => {


    try {
        console.log(nombre, apellido, alias)
        const url = `http://localhost:5000/persona/38`

        console.log(url)

        const resultPersona = await axios.put(url, { nombre, apellido, alias })
        if (resultPersona.status === 200) {

            console.log('status ok')
        }
        return (resultPersona.data.persona);

    }
    catch (e) {
        console.log(e)
    }
}
