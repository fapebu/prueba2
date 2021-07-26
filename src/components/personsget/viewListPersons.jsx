import React, { useEffect, useState } from 'react';
import Card from './card';
import { getListPersona } from '../../services/serviceget';
import { librosPersona } from '../../services/servicegetlibro'


export default function Viewallpersons() {
    const [ list, setList ] = useState({
        nombre: '',
        apellido: '',
        alias: '',
        id: '',
        nombre_libro: '',
        persona_id: ''
    })
    const [ libro, setLibro ] = useState({
        nombre: '',
        persona_id: ''
    })

    //traer en un objeto los datos y unirlos

    useEffect(() => { myFecth() }, [])

    const myFecth = async () => {
        const result = await getListPersona()
        setList(result)
    }

    useEffect(() => { myFecthLibro() }, [])

    const myFecthLibro = async () => {
        const result = await librosPersona()
        setList(result)
    }

    console.log(list[ result ])


    // const idPersona = list.map(item => {
    //     return (item.id)
    // })

    // const filterInfo = libro.filter(personaLibro => idPersona.includes(personaLibro.persona_id))

    // const nombreLibro = filterInfo.map(nombreLibro => nombreLibro.nombre)


    return (list.map(item => <Card key={ item.id } { ...item } />))

}

