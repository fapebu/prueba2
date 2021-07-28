import axios from "axios"

export const editPerson = async (nombre, apellido, alias, email, id) => {

    try {

        const url = `http://localhost:5000/persona/${ id }`

        const resultPersona = await axios.put(url, { nombre, apellido, alias, email })
        if (resultPersona.status === 200) {

            console.log('status ok')
            return (resultPersona);
        }
        console.log(url)

    }
    catch (e) {
        console.log(e)
    }

}