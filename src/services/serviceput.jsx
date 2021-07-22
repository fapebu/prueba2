import axios from "axios"

export const editPerson = async (nombreEdit, apellidoEdit, aliasEdit) => {
    console.log(nombreEdit, apellidoEdit, aliasEdit)
    try {
        //hardcodeado para probar
        const url = `http://localhost:5000/persona/38`

        const resultPersona = await axios({
            method: 'put',
            url,
            data: {
                nombreEdit,
                apellidoEdit,
                aliasEdit
            }
        })

        if (resultPersona.status === 200) {
            console.log(resultPersona.data)
            return ('Editado correctamente');
        }

    }
    catch (e) {
        console.log(e.response.data.Error)
    }
}
