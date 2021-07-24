import axios from "axios"

export const editPerson = async (nombre, apellido, alias, email) => {
    console.log(nombre, apellido, alias, email)



    try {

        const url = `http://localhost:5000/persona/38`
        console.log(nombre, apellido, alias, email)


        const resultPersona = await axios.put(url, { nombre, apellido, alias, email })
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