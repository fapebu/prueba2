import { useState } from 'react'
import putpersons from './editperson'

//Formulario para tomar los datos de edicion

export default function FormEdit() {
    const [ nombre, setNombre ] = useState([])
    const [ apellido, setApellido ] = useState([])
    const [ alias, setAlias ] = useState([])



    return (
        <>
            <label htmlFor="">Nombre</label>
            <input type="text"
                onChange={ e => setNombre(e.target.value) }
            />
            <label htmlFor="">Apellido</label>

            <input type="text"
                onChange={ e => setApellido(e.target.value) }
            />
            <label htmlFor="">Alias</label>

            <input type="text"
                onChange={ e => setAlias(e.target.value) }
            />

            <div>
                { nombre }
                { apellido }
                { alias }
            </div>
        </>
    )
}


