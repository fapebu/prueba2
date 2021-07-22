import axios from "axios"

export const editPerson = async (itemId) => {
    try {

        const url = `http://localhost:5000/persona/${ itemId }`


        const resultPersona = await axios.put(url)

        if (resultPersona.status === 200) {
            return ('Editado correctamente');
        }

    }
    catch (e) {
        return (e.response.data.Error);

    }
}
