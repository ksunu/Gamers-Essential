import axios from 'axios'

export default class GameService {
    constructor() {

        this.service = axios.create({

            baseURL: 'https://api.rawg.io/api',

        })
    }

    getAllGames = () => this.service.get('/games')
    getAllGames = page => this.service.get(`/games?page=${page}`)
    getOneGame = id => this.service.get(`/games/${id}`)

    // https://api.rawg.io/api/games?page=7
    // getOneCommunity = id => this.service.get(`getOneCommunity/${id}`)
    // createCommunity = community => this.service.post(`/newCommunity`, community)


}