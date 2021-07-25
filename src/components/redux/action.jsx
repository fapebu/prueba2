import { getListPersona } from '../../services/serviceget'

export const viewPersons = () => {
    return (dispatch) => {
        return getListPersona().then((response) => {
            dispatch(viewPersonsAxios(response.data))
        })
    }
}

export function viewPersonsAxios(response) {
    return {
        type: "VIEW_PEOPLE",
        response: response
    }
}