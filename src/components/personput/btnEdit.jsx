
export default function BtnEdit(nombre, apellido, alias, email) {


    const handleChangedata = () => {
        //llamara a otra funcion
        return (console.log(nombre, apellido, alias, email))
    }

    return (
        <button type="submit"
            onClick={ () => handleChangedata() }
        >Editar</button>
    )
}

