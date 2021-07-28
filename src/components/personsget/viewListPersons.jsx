import React, { useEffect } from 'react';
import Card from './card';
import { getListPersona } from '../../services/serviceget';
import { useDispatch, useSelector } from 'react-redux';


export default function Viewallpersons() {

    const personaView = useSelector((state) => state.listadopersona)

    const dispatch = useDispatch();

    const myFecth = async () => {

        try {
            const result = await getListPersona()
            console.log(result)
            dispatch({ type: 'GET_MOSTRAR_PERSONAS', listado: result })
            console.log(result)

        }
        catch (e) {
            console.log(e.message)
        }

    }
    useEffect(() => { myFecth() }, [])

    console.log("lo que viene del state ", personaView)



    return (personaView.map(item => <Card key={ item.id } { ...item } />))


}

