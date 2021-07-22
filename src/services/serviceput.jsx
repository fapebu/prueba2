import axios from "axios"

export const editPerson = async (itemId, nombreEdit, apellidoEdit, aliasEdit) => {
    try {

        const url = `http://localhost:5000/persona/${ itemId }`

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
