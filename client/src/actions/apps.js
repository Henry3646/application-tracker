import * as api from '../api'


export const getApps = () =>async (dispatch) => {

    try {
        const { data } = await api.fetchApps()
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
    
    
}

export const createApp = (app) => async (dispatch) => {
    try {
        const { data } = await api.createApp(app)
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateApp = (id, app) => async (dispatch) => {
    try {
        const { data } = await api.updateApp(id, app)

        dispatch({type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteApp = (id) => async (dispatch) => {
    try {
        await api.deleteApp(id)

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}