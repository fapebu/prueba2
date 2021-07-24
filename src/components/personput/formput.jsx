import { useState } from 'react'
import { editPerson } from '../../services/serviceput'

export default function FormEdit() {


    const [ nombre, setNombre ] = useState("luisca")
    const [ apellido, setApellido ] = useState("pepe")
    const [ alias, setAlias ] = useState("dros")
    const [ email, setEmail ] = useState("fer_nada@gmail.com")

    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }


    const handleChangeApellido = (e) => {
        setApellido(e.target.value + " ")
    }

    const handleChangeAlias = (e) => {
        setAlias(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    // const handleInput = (e) => {
    //     const { name, value } = e.target

    //     setData({
    //         ...data, [ name ]: value,
    //     })
    //     console.log(e.target.value)
    // }

    const myFecth = async () => {
        const result = await editPerson(nombre, apellido, alias, email)
        console.log("el result del formput" + result)
    }

    // myFecth([ data ])



    return (
        <>
            <label htmlFor="">Nombre
                <input type="text"
                    value={ nombre } onChange={ (e) => handleChangeName(e) }
                    name='nombre'
                />
            </label>
            <label htmlFor="">Apellido
                <input type="text"
                    value={ apellido } onChange={ (e) => handleChangeApellido(e) }
                    name='apellido'
                />
            </label>
            <label htmlFor="">Alias
                <input type="text"
                    value={ alias } onChange={ (e) => handleChangeAlias(e) }
                    name='alias'
                />
            </label>
            <label htmlFor="">Email
                <input type="text"
                    value={ email } onChange={ (e) => handleChangeEmail(e) }
                    name='email'
                />
            </label>

            <div>
                <button onClick={ myFecth } > Guardar </button>
            </div>
        </>
    )
}


