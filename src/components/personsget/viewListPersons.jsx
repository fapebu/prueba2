import React, { useEffect } from 'react';
import Card from './card';
import { getListPersona } from '../../services/serviceget';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function Viewallpersons() {

    const dispatch = useDispatch();
    const statePersonas = useSelector((state) => state.listadopersona)
    const [ personas, setPersonas ] = useState()

    const myFecth = async () => {
        try {
            const result = await getListPersona()

            dispatch({ type: 'GET_PERSONAS', listado: result.data })

            console.log(statePersonas)

            setPersonas(statePersonas)

            console.log(personas)
        }

        catch (e) {
            console.log(e.message)
        }

    }

    useEffect(() => { myFecth() }, [])

    return ('hola')
    // return (statePersonas.map(item => <Card key={ item.id } { ...item } />))


}

