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

            dispatch({ type: 'GET_MOSTRAR_PERSONAS', listado: result.data })

        }
        catch (e) {
            console.log(e.message)
        }

    }
    useEffect(() => { myFecth() }, [])

    console.log("lo que viene del state ", personaView)


    return (
        <h3>Resultado</h3>
    )
    // return (statePersonas.map(item => <Card key={ item.id } { ...item } />))


}

