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

    
    // getAllGamesByGenres = genre => this.service.get(`/games?genres=${genre}`)
    getAllGamesByGenres = (genre, page) => this.service.get(`/games?genres=${genre}&page=${page}`)


}