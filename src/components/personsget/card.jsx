import Delete from '../persondelete/delete'
import './stylecard.css'


export default function Card({ nombre = '', apellido = '', alias = '', email = '', id = '' }) {

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
            <div>
            </div>
            <div className="contentMain___buttons">
                <div className="contentMain___buttons___delete">
                    <Delete itemId={ id } />
                </div>
                <div className="contentMain___buttons___edit">
                    <button>Edit</button>
                </div>
            </div>
        </div>
    )
}