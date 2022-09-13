import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:3001' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const fetchApps = () => API.get('/apps');
export const createApp = (newApp) => API.post('/apps', newApp)
export const updateApp = (id, updatedApp) => API.patch(`/apps/${id}`, updatedApp)
export const deleteApp = (id) => API.delete(`/apps/${id}`)

export const signin = (formData) => API.post('/user/signin', formData)
export const signup = (formData) => API.post('/user/signup', formData)
