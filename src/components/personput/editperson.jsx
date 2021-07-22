import { useState } from 'react';
import { editPerson } from '../../services/serviceput'

//Componente que recibe los datos del formulario de edicion


export default function PutPerson(nombreEdit, apellidoEdit, aliasEdit) {
    const [ data, setData ] = useState([]);


    const handlePut = async () => {
        const result = await editPerson(nombreEdit, apellidoEdit, aliasEdit)
        setData(result)
    }
    console.log(data)
    return (
        <button onClick={ handlePut }
            type="submit"
        >Guardar
        </button>
    )


}


