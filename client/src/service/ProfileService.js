import axios from 'axios'

export default class GameService {
    constructor() {

        this.service = axios.create({

            baseURL: `${process.env.REACT_APP_API_URL}/profile`

        })
    }

    addFavCommunity = (id, user) => this.service.post(`/addFavCommunity/${id}`, user)
    deleteFavCommunity = (id, user) => this.service.post(`/deleteFavCommunity/${id}`, user)

    addFavEvent = (id, user) => this.service.post(`/addFavEvent/${id}`, user)
    deleteFavEvent = (id, user) => this.service.post(`/deleteFavEvent/${id}`, user)

    addFavGame = (id, user) => this.service.post(`/addFavGame/${id}`, user)
    deleteFavGame = (id, user) => this.service.post(`/deleteFavGame/${id}`, user)

    getAllProfile = id => this.service.get(`/getAllProfile/${id}`)

    updateAvatar = (id, avatar) => this.service.post(`/editAvatar/${id}`, avatar)
}