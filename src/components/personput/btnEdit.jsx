import { useDispatch, useSelector } from 'react-redux'

export default function BtnEdit(nombre, apellido, alias, email) {

    // const dataSendPut = useSelector((estado) => estado.dataSendPut)

    // const dispatch = useDispatch()

    // const addData = (addInfo) => {
    //     dispatch({
    //         type: 'GETDATA',
    //         newElement: addInfo
    //     })
    // }
    const handleChangedata = () => {

        return (console.log(nombre, apellido, alias, email))
    }

    return (
        <button type="submit"
            onClick={ () => handleChangedata() }
        >Editar</button>
    )
}

