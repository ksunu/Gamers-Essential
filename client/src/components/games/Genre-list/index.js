import React, { Component } from "react"
import {Link} from 'react-router-dom'
import GameService from "../../../service/GameService"
import GenreCard from "./../Game-list/Game-card"
import GenreBar from "./Genre-bar"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

class GenreList extends Component {
    constructor() {
        super()
        this.state = {

            genreCategory: "indie",
            genreGames: undefined,
            count: 1
        }
        this.GameService = new GameService()
    }

    componentDidMount = () => this.updateGameList()

    updateGameList = () => {

        this.GameService.getAllGamesByGenres(this.state.genreCategory, this.state.count)
            .then((response) => this.setState({ genreGames: response.data }))
            .catch((err) => console.log(err))

    }

    handleButtonBar = genre => {

        this.setState({ genreCategory: genre })
        this.updateGameList()

    }

    handleNextPage = () => {

        this.setState({ count: ++this.state.count })
        this.updateGameList()
    }

    handlePreviousPage = () => {
        // TO-DO count <= 0 and page.length
        this.setState({ count: --this.state.count })
        this.updateGameList()
    }

    render() {
        return (
            <>
                <Link to="/games"><Button variant="dark" type="submit">Back</Button></Link>
            

                {this.state.count > 1 && <Button onClick={this.handlePreviousPage} className="left">&lt;</Button>}
                <Button onClick={this.handleNextPage} className="right">&#62;</Button>
                <Container>
                    <GenreBar handleButtonBar={genre => this.handleButtonBar(genre)} />

                   
                    <h1>Genre: {this.state.genreCategory}</h1>

                    <p>Page: {this.state.count} </p>

                    <Row>
                        {this.state.genreGames && this.state.genreGames.results.map((elm) =>
                            <GenreCard key={elm.id} {...elm} />
                        )}

                    </Row>

                </Container>



            </>
        )
    }
}

export default GenreList
