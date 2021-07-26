import Delete from '../persondelete/delete'
import './stylecard.css'
import BtnEdit from '../personput/btnEdit'
import { librosPersona } from '../../services/servicegetlibro'
import { useEffect, useState } from 'react'

export default function Card({ nombre = '', apellido = '', alias = '', email = '', id = '', libro = '' }) {

    const [ dataLibros, setDataLibros ] = useState([])

    useEffect(() => { myFecth() }, [])

    const myFecth = async () => {
        const result = await librosPersona()
        setDataLibros(result)
    }
    // console.log(id)
    // const filtertodo = dataLibros.filter(personasLibros => id.includes(personasLibros.id))
    // const filterInfo = dataLibros.filter(personaLibro => id.includes(personaLibro.persona_id))

    // console.log(filtertodo)

    return (
        <div className="contentMain">
            <div className="contentMain___name">
                <h2> Nombre: { nombre } </h2>
            </div>
            <div className="contentMain___apellido">
                <h3> Apellido: { apellido }</h3>
            </div>
            <div className="contentMain___alias">
                <h4>Alias: { alias }</h4>
            </div>
            <div className="contentMain___alias">
                <h5>Email: { email }</h5>
            </div>
            <div className="contentMain___alias">
                <h5>Libro: { libro }</h5>
            </div>

            <div className="contentMain___buttons">
                <div className="contentMain___buttons___delete">
                    <Delete itemId={ id } />
                </div>
                <div className="contentMain___buttons___edit">
                    <BtnEdit nombre={ nombre } apellido={ apellido } alias={ alias } email={ email } id={ id } /> </div>
            </div>
        </div>
    )
}