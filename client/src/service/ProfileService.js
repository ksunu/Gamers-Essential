import axios from 'axios'

export default class GameService {
    constructor() {

        this.service = axios.create({

            baseURL: 'http://localhost:5000/api/profile'

        })
    }

    addFavCommunity = id => this.service.post(`/addFavCommunity/${id}`)
    addFavEvent = id => this.service.post(`/addFavEvent/${id}`)
    getAllProfile = () => this.service.get('/getAllProfile')


}