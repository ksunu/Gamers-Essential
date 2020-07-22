import React, { Component } from 'react'
import GameService from '../../../service/GameService'
import GameCard from './Game-card'
import './Game-list.css'

// BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


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
                <Container>
                    <h1>Games</h1>
                    <Row>
                        {this.state.games.map(elm => <GameCard key={elm.id} {...elm} />)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default GameList