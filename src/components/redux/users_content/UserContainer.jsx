import { useDispatch, useSelector } from 'react-redux'

export default function InfoGet() {
    const users = useSelector((state) => state.data)
    const dispatch = useDispatch()


    console.log(users)

    return (
        <>
            <h3>
                INFO
            </h3>
            <div>

            </div>
            <button onClick={ () => dispatch({ type: 'GET_PERSONA' }) }>Mostrar</button>
        </>

    )

}

