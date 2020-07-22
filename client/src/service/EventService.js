import axios from 'axios'

export default class EventService {
    constructor() {

        this.service = axios.create({

            baseURL: 'http://localhost:5000/api/event',
            withCredentials: true

        })
    }

    getAllEvent = () => this.service.get('/getAllEvent')
    getOneEvent = id => this.service.get(`getOneEvent/${id}`)
    createEvent = event => this.service.post(`/newEvent`, event)
    editEvent = (id, updatedEvent) => this.service.post(`/editEvent/${id}`, updatedEvent)
    deleteEvent = id => this.service.get(`/deleteEvent/${id}`)

}
