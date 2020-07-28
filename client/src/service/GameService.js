import axios from 'axios'

export default class GameService {
    constructor() {

        this.service = axios.create({

            baseURL: 'https://api.rawg.io/api',

        })
    }


    getAllGames = page => this.service.get(`/games?page=${page}`)
    searchGames = name => this.service.get(`/games?search=${name}&page_size=1`)
    getOneGame = id => this.service.get(`/games/${id}`)
    getOneGameScreensShots = id => this.service.get(`/games/${id}/screenshots`)
    getAllGamesByGenres = (genre, page) => this.service.get(`/games?genres=${genre}&page=${page}`)
    getAllGamesbyPlatform = (platform, page) => this.service.get(`/games?platforms=${platform}&page=${page}`)
   

}