import { useState } from 'react'
import { editPerson } from '../../services/serviceput'
import './personputstyle.css'


export default function FormEdit(nombreEdit = "", apellidoEdit = "", aliasEdit = "", emailEdit = "") {



    const [ nombre, setNombre ] = useState("luisca")
    const [ apellido, setApellido ] = useState("pepe")
    const [ alias, setAlias ] = useState("dros")
    const [ email, setEmail ] = useState("fer_nada@gmail.com")

    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)
    }

    const handleChangeAlias = (e) => {
        setAlias(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const myFecth = async () => {
        const result = await editPerson(nombre, apellido, alias, email)
        console.log("el result del formput" + result)
    }




    return (
        <>
            <div className="contentMainForm">
                <div className="contentMainForm___child">
                    <div className="contentMainForm___child___nombre">
                        <label htmlFor="">Nombre
                            <input type="text"
                                value={ nombre } onChange={ (e) => handleChangeName(e) }
                                name='nombre'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___apellido">
                        <label htmlFor="">Apellido
                            <input type="text"
                                value={ apellido } onChange={ (e) => handleChangeApellido(e) }
                                name='apellido'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___alias">

                        <label htmlFor="">Alias
                            <input type="text"
                                value={ alias } onChange={ (e) => handleChangeAlias(e) }
                                name='alias'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___alias">
                        <label htmlFor="">Email
                            <input type="text"
                                value={ email } onChange={ (e) => handleChangeEmail(e) }
                                name='email'
                            />
                        </label>
                    </div>

                    <div className="contentMainForm___child___button">
                        <button onClick={ myFecth } > Guardar </button>
                    </div>
                </div>
            </div>
        </>
    )
}


