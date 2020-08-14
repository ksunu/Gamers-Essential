import axios from 'axios'

export default class EventService {
    constructor() {

        this.service = axios.create({

            baseURL: `${process.env.REACT_APP_API_URL}/event`,
            withCredentials: true

        })
    }

    getAllEvent = () => this.service.get('/getAllEvent')
    getOneEvent = id => this.service.get(`getOneEvent/${id}`)
    createEvent = event => this.service.post(`/newEvent`, event)
    editEvent = (id, updatedEvent) => this.service.put(`/editEvent/${id}`, updatedEvent)
    deleteEvent = id => this.service.delete(`/deleteEvent/${id}`)

    createComment = (id, comment) => this.service.post(`/newComment/${id}`, comment)
    deleteComment = id => this.service.post(`/deleteComment/${id}`)
}
