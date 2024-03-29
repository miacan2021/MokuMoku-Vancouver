import axios from "axios";

const url = 'https://mokumoku-vancouver.onrender.com'
const admin = 'https://mokumoku-vancouver.onrender.com/admin'

export const fetchEvents = () => axios.get(url)
export const createEvent = (newEvent) => axios.post(admin, newEvent)
export const editEvent = (id, editEvent) => axios.post(`${admin}/${id}`, editEvent)
export const deleteEvent = (id) => axios.delete(`${admin}/${id}`, deleteEvent)

export const addMember = (id, member) => axios.post(`${url}/${id}`, member)