import axios from "axios"

export const editPerson = async (nombre, apellido, alias) => {

    try {
        console.log(nombre, apellido, alias)
        //hardcodeado para probar
        const url = 'http://localhost:5000/persona/38'

        const resultPersona = await axios({
            method: 'put',
            url,
            data: nombre,
            apellido,
            alias

        })
        console.log(resultPersona)
        if (resultPersona.status === 200) {
            console.log('status ok')
            return (resultPersona.data);
        }

    }
    catch (e) {
        console.log(e)
    }
}
