import axios from 'axios'

export default class GameService {
    constructor() {

        this.service = axios.create({

            baseURL: 'http://localhost:5000/api/profile'

        })
    }

    addFavCommunity = (id, user) => this.service.post(`/addFavCommunity/${id}`, user)
    addFavEvent = (id, user) => this.service.post(`/addFavEvent/${id}`, user)
    addFavGame = (id, user) => this.service.post(`/addFavGame/${id}`, user)

    getAllProfile = id => this.service.get(`/getAllProfile/${id}`,)


}