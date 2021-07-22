import { useEffect, useState } from 'react';
import { editPerson } from '../../services/serviceput'

//Componente que recibe los datos del formulario de edicion


export default function PutPerson({ nombreForm, apellidoForm, aliasForm }) {


    const [ data, setData ] = useState('');

    useEffect(() => { handlePut() }, [])

    const handlePut = async () => {
        const result = await editPerson()
        setData(result)

    }

    return (
        <button onClick={ (handlePut) }>Guardar</button>
    )


}


