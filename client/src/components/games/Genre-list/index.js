import React, { Component } from "react"
import GameService from "../../../service/GameService"
import GenreCard from "./Genre-card"
import GenreForm from "./Genre-form"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
// import Button from "react-bootstrap/Button"

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

    handleForm = input => {
        this.setState({ genreCategory: input })
        this.updateGameList()
        console.log(this.state)

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
                <Container>
                
                    <GenreForm handleForm={input => this.handleForm(input)} />
                    <h1>Genres</h1>
                    <p>Page: {this.state.count} </p>
                    <Button onClick={this.handlePreviousPage} className="left">&lt;</Button>
                    <Button onClick={this.handleNextPage} className="right">&#62;</Button>

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
