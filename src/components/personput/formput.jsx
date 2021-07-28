import { useState } from 'react'
import { editPerson } from '../../services/serviceput'
import './personputstyle.css'


export default function FormEdit() {

    const [ data, setData ] = useState({
        nombre: 'topo',
        apellido: 'tito',
        alias: 'jorfito',
        email: 'fer_nada@gmail.com'
    })

    const myFecth = async ([ ...a ]) => {
        const result = await editPerson([ ...a ])
        console.log("el result del formput" + result)
    }


    const handleChangeName = (e) => {
        const { nombre, value } = e.target
        setData(prevState => ({ prevState, [ nombre ]: value }))
    }

    const handleChangeApellido = (e) => {
        const { apellido, value } = e.target
        setData(prevState => ({ prevState, [ apellido ]: value }))
    }

    const handleChangeAlias = (e) => {
        const { alias, value } = e.target
        setData(prevState => ({ ...prevState, [ alias ]: value }))
    }

    const handleChangeEmail = (e) => {
        const { email, value } = e.target
        setData(prevState => ({ ...prevState, [ email ]: value }))
    }



    console.log(data)


    return (
        <>
            <div className="contentMainForm">
                <div className="contentMainForm___child">
                    <div className="contentMainForm___child___nombre">
                        <label htmlFor="">Nombre
                            <input
                                value={ data.nombre } onChange={ (e) => handleChangeName(e) }
                                type="text"
                                name='nombre'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___apellido">
                        <label htmlFor="">Apellido
                            <input type="text"
                                value={ data.apellido }
                                onChange={ (e) => handleChangeApellido(e) }
                                name='apellido'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___alias">

                        <label htmlFor="">Alias
                            <input type="text"
                                value={ data.alias }
                                onChange={ (e) => handleChangeAlias(e) }
                                name='alias'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___alias">
                        <label htmlFor="">Email
                            <input type="text"
                                value={ data.email }
                                onChange={ (e) => handleChangeEmail(e) }
                                name='email'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___button">
                        <button onClick={ () => myFecth([ data ]) } > Guardar </button>
                    </div>
                </div>
            </div>
        </>
    )
}


