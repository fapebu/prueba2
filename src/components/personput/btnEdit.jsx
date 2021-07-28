
export default function BtnEdit(nombre, apellido, alias, email, id) {



    const handleChangedata = () => {
        //llamara a otra funcion
        return (nombre, apellido, alias, email, id)
    }
    const novaFun = handleChangedata()

    console.log(novaFun)

    return (
        <button type="submit"
            onClick={ () => handleChangedata() }
        >Editar</button>
    )
}

