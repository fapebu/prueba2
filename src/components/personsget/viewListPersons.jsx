import React, { useEffect, useState } from 'react';
import Card from './card';
import { getListPersona } from '../../services/serviceget';



export default function Viewallpersons() {
    const [ list, setList ] = useState([])


    useEffect(() => { myFecth() }, [])

    const myFecth = async () => {
        const result = await getListPersona()
        setList(result)
    }

    return (list.map(item => <Card key={ item.id } { ...item } />))


}

