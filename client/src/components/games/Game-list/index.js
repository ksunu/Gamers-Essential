import React, { Component } from 'react'
import GameService from '../../../service/GameService'
import GameCard from './Game-card'

class GameList extends Component {
    constructor() {
        super()
        this.state = {
            games: []
        }
        this.GameService = new GameService()
    }


    componentDidMount = () => this.updateGameList()

    updateGameList = () => {
        this.GameService
            .getAllGames(1)
            .then(response => this.setState({ games: response.data.results }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                {this.state.games.map(elm => <GameCard key={elm.id} {...elm}/>)}
            </>
        )
    }
}

export default GameList