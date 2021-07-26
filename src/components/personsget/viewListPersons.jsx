import React, { useEffect, useState } from 'react';
import Card from './card';
import { getListPersona } from '../../services/serviceget';
import { librosPersona } from '../../services/servicegetlibro'


export default function Viewallpersons() {
    const [ list, setList ] = useState([])
    const [ libro, setLibro ] = useState([])

    useEffect(() => { myFecth() }, [])

    const myFecth = async () => {
        const result = await getListPersona()
        setList(result)
    }

    useEffect(() => { myFecthLibro() }, [])

    const myFecthLibro = async () => {
        const result = await librosPersona()
        setLibro(result)
    }


    const idPersona = list.map(item => {
        return (item.id)
    })

    const filterInfo = libro.filter(personaLibro => idPersona.includes(personaLibro.persona_id))

    console.log(filterInfo)


    return (list.map(item => <Card key={ item.id } { ...item } />))

}

