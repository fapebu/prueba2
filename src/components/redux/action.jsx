import { getListPersona } from '../../services/serviceget'
import { useEffect } from 'react'

export const viewPersons = () => {
    return async dispatch => {
        const res = await getListPersona()
        const action = dispatch({
            type: "VIEW_PEOPLE",
            data: res.data
        })
    }
}

export function viewPersonsAxios(response) {
    return {
        type: "VIEW_PEOPLE",
        response: response
    }
}