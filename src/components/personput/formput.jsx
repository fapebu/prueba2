import { useState } from 'react'
import { editPerson } from '../../services/serviceput'


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

    const myFecth = async () => {
        const result = await editPerson(data)
        console.log(result)
    }

    if (data.length === 3) {
        myFecth([ data ])
    }


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
                <button onClick={ () => myFecth() } > Guardar </button>
            </div>
        </>
    )
}


