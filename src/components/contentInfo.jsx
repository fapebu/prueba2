import { useSelector, useDispatch } from "react-redux";
import { getListPersona } from '../services/serviceget'

export default function ContentInfo() {

    const content = useSelector(state => state)
    const dispatch = useDispatch();

    const viewData = () => {
        return dispatch => { getListPersona().then(res => dispatch({ type: "VIEW_PEOPLE", data: res.data })) }
    }

    function onFetchdata() {
        dispatch(viewData())
    }
    console.log(content)

    return (
        <>
            <div>
                { content.data }
            </div>
            <h2>apretar</h2>
            <button onClick={ onFetchdata }>View</button>
        </>
    )

}
