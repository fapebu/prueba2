import { useState, useEffect } from 'react'
import { editPerson } from '../../services/serviceput'

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
    useEffect(() => { myFecth() }, [])

    const myFecth = async (nombreEdit, apellidoEdit, aliasEdit) => {
        const result = await editPerson(nombreEdit, apellidoEdit, aliasEdit)
        setData(result)
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
                <button onClick={ () => myFecth({ ...data }) } > uardar </button>
            </div>
        </>
    )
}


