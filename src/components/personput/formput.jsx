import { useState } from 'react'
import PutPerson from './editperson'

//Formulario para tomar los datos de edicion de aca mandar a put de axios

export default function FormEdit() {
    const valoreIniciales = {
        nombre: '',
        apellido: '',
        alias: ''
    }

    const [ data, setData ] = useState(valoreIniciales)

    const handleInput = (e) => {
        const { name, value } = e.target

        setData({
            ...data, [ name ]: value,
        })
    }
    console.log(data)
    return (
        <>
            <label htmlFor="">Nombre
                <input type="text"
                    value={ data.nombre }
                    onChange={ handleInput }
                    name='nombre'
                />
            </label>
            <label htmlFor="">Apellido
                <input type="text"
                    value={ data.apellido }
                    onChange={ handleInput }
                    name='apellido'
                />
            </label>
            <label htmlFor="">Alias
                <input type="text"
                    value={ data.alias }
                    onChange={ handleInput }
                    name='alias'
                />
            </label>

            <div>
                { data.nombre + data.apellido + data.alias }
                <PutPerson { ...data } />

            </div>
        </>
    )
}


