import axios from "axios";

const url = "/apps"

export const fetchApps = () => axios.get(url);
export const createApp = (newApp) => axios.post(url, newApp)
export const updateApp = (id, updatedApp) => axios.patch(`${url}/${id}`, updatedApp)
export const deleteApp = (id) => axios.delete(`${url}/${id}`)