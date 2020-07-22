import React, { Component } from "react"
import GameService from "../../../service/GameService"
import GameCard from "./Game-card"
import GenreCard from "./Genre-card"
import "./Game-list.css"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

class GameList extends Component {
    constructor() {
        super()
        this.state = {
            games: [],
            count: 1,
            genreCategory: "action"
        }
        this.GameService = new GameService()
    }

    componentDidMount = () => this.updateGameList()

    updateGameList = () => {
        this.handleGameList()
        this.handleGenreList()
    }

  
    handleGenreList = () => {
        this.GameService.getAllGamesByGenres(this.state.genreCategory)
            .then((response) => this.setState({ genreGames: response.data.results }))
            .catch((err) => console.log(err))
    }

    handleNextPage = () => {
        const copyState = [this.state.count];
        this.setState({ copyState: ++this.state.count })
        this.updateGameList()
    }

    handlePreviousPage = () => {
        const copyState = [this.state.count]
        this.setState({ copyState: --this.state.count })
        this.updateGameList()
    }

    handleCategory = category => {


        this.setState({ genreCategory: category })
        this.updateGameList()
    }


    render() {
        return (
            <>
                <Container>
                    <h1>Games</h1>
                    <Row>
                        {this.state.games.map((elm) => (
                            <GameCard key={elm.id} {...elm} />
                        ))}
                        <Button onClick={this.handlePreviousPage}>Previous Page</Button>
                        <Button onClick={this.handleNextPage}>Next Page</Button>
                    </Row>

                </Container>

                {this.state.genreGames.map((elm) => (
                    <GenreCard key={elm.id} {...elm} />

                ))}

            </>
        )
    }
}

export default GameList
