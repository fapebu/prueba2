import Delete from '../persondelete/delete'
import './stylecard.css'
import BtnEdit from '../personput/btnEdit'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Card() {

    const personaView = useSelector((state) => state.listadopersona)


    const cardsPeople = personaView.map((item) => {
        return (
            <div className="contentMain">
                <div className="contentMain___name" key={ item.id }>
                    <h2> Nombre: { item.nombre } </h2>
                    <div className="contentMain___apellido" key={ item.id }>
                        <h3> Apellido: { item.apellido }</h3>
                    </div>
                    <div className="contentMain___alias" key={ item.id }>
                        <h4>Alias: { item.alias }</h4>
                    </div>
                    <div className="contentMain___alias" key={ item.id }>
                        <h5>Email: { item.email }</h5>
                    </div>
                    <div className="contentMain___buttons">
                        <div className="contentMain___buttons___delete">
                            <Delete itemId={ item.id } />
                        </div>
                        <div className="contentMain___buttons___edit">
                            <BtnEdit nombre={ item.nombre } apellido={ item.apellido } alias={ item.alias } email={ item.email } id={ item.id } /> </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
    )

    return (cardsPeople)
}

