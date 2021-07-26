import { useState, useEffect } from "react";
import { librosPersona } from '../../services/servicegetlibro'
import { getListPersona } from '../../services/serviceget'

export default function NombreLibro() {

    const [ nombreLibro, setNombreLibro ] = useState([])
    const [ dataPersona, setDataPersona ] = useState([]);


    const myFecthLibro = async () => {
        const result = await librosPersona();
        setNombreLibro(result)
    }

    useEffect(() => { myFecthLibro() }, [])

    const myFecthPersona = async () => {
        const result = await getListPersona();
        setDataPersona(result)
    }
    useEffect(() => { myFecthPersona() }, [])

    const idPersona = dataPersona.map(item => {
        return (item.id)
    })

    const filterInfo = nombreLibro.filter(personaLibro => idPersona.includes(personaLibro.persona_id))

    console.log(filterInfo)


    return (
        <h5 key={ idPersona }>Libro: </h5>

    )
}