import axios from "axios"

export const deletePerson = async (itemId) => {

    try {

        const url = `http://localhost:5000/persona/${ itemId }`

        const resultPersona = await axios.delete(url);

        if (resultPersona.status === 200) {
            return ('borrado correctamente');
        }



    }
    catch (e) {
        return (e.response.data.Error);

    }
}
