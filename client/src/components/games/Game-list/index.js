import React, { Component } from 'react'
import GameService from '../../../service/GameService'
import GameCard from './Game-card'
import './Game-list.css'

// BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class GameList extends Component {
    constructor() {
        super()
        this.state = {
            games: [],
            count: 1
        }
        this.GameService = new GameService()
    }


    componentDidMount = () => this.updateGameList()

    updateGameList = () => {
        this.GameService
            .getAllGames(this.state.count)
            .then(response => this.setState({ games: response.data.results }))
            .catch(err => console.log(err))
    }

    handleNextPage = () => {

    const copyState = [this.state.count]
    this.setState({copyState: ++this.state.count})
    this.updateGameList()

    }

    handlePreviousPage = () => {

    const copyState = [this.state.count]      
    this.setState({count: --this.state.count})
    this.updateGameList()
    
     }




    render() {
        return (
            <>
                <Container>
                    <h1>Games</h1>
                    <Row>
                        {this.state.games.map(elm => <GameCard key={elm.id} {...elm} />)}
                        <Button onClick={this.handlePreviousPage}>Previous Page</Button>
                        <Button onClick={this.handleNextPage}>Next Page</Button>
                    </Row>
                </Container>
            </>
        )
    }
}

export default GameList