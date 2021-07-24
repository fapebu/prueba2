export default function BtnEdit(nombre, apellido, alias, email) {

    const handleChangedata = () => {

        return (console.log(nombre, apellido, alias, email))
    }

    return (
        <button type="submit"
            onClick={ () => handleChangedata() }
        >Editar</button>
    )
}

