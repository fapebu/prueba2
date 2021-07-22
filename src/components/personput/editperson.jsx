import { useEffect, useState } from 'react';
import { editPerson } from '../../services/serviceput'

//Componente que recibe los datos del formulario de edicion


export default function PutPerson() {
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ alias, setAlias ] = useState('');
    const [ data, setData ] = useState('');

    useEffect(() => { handlePut() }, [])


    const editData = {
        nombre: nombre,
        apellido: apellido,
        alias: alias
    }
    const handlePut = async () => {
        const result = await editPerson(editData)
        setData(result)
        setNombre('')
        setApellido('')
        setAlias('')

    }

    return (
        <button onClick={ (handlePut) }>Guardar</button>
    )


}


