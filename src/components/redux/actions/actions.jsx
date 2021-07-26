import { VIEW_ALL_PEOPLE } from './types'
import { getListPersona } from '../../../services/serviceget'


const viewDataSet = (data) => {
    return {
        type: VIEW_ALL_PEOPLE,
        payload: data
    }
}

const viewDataBase = () => async (dispatch) => {
    try {
        const res = await getListPersona()

        dispatch({
            type: VIEW_ALL_PEOPLE,
            payload: res
        })
    } catch (e) {
        console.log(e)
    }
}

export {
    viewDataSet,
    viewDataBase,
}