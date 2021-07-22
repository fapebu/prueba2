import { useState } from 'react';
import { editPerson } from '../../services/serviceput'

//Componente que recibe los datos del formulario de edicion


export default function PutPerson({ nombreEdit, apellidoEdit, aliasEdit, itemId }) {

    console.log(nombreEdit, apellidoEdit, aliasEdit, itemId)
    const [ data, setData ] = useState({
        nombreEdit: nombreEdit,
        apellidoEdit: apellidoEdit,
        aliasEdit: aliasEdit
    });
    console.log(data)


    const handlePut = async () => {
        const result = await editPerson(data, itemId)
        setData(result)
    }
    return (
        <button onClick={ (handlePut) }
            type="submit"
        >Guardar
        </button>
    )


}


