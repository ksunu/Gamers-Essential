import React, { Component } from "react"
import { Link } from "react-router-dom"
import GameService from "../../../service/GameService"
import PlatformCard from "./../Game-list/Game-card"
import PlatformBar from "./Platform-bar"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

class PlatformList extends Component {
    constructor() {
        super()
        this.state = {

            platformCategory: 4,
            gamesByPlatform: undefined,
            count: 1
        }
        this.GameService = new GameService()
    }

    componentDidMount = () => this.updateGameList()

    updateGameList = () => {

        this.GameService.getAllGamesbyPlatform(this.state.platformCategory, this.state.count)
            .then((response) => this.setState({ gamesByPlatform: response.data }))
            .catch((err) => console.log(err))

    }



    handleButtonBar = platform => {

        this.setState({ platformCategory: platform })
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
                <Container>
                <h1>Platforms</h1>
                <Link to="/games"><Button variant="dark" type="submit">Back</Button></Link>
                <PlatformBar handleButtonBar={platform => this.handleButtonBar(platform)} />

                {this.state.count > 1 && <Button onClick={this.handlePreviousPage} className="left">&lt;</Button> }
                <Button onClick={this.handleNextPage} className="right">&#62;</Button>
                    <p>Page: {this.state.count} </p>

                    <Row>
                        {this.state.gamesByPlatform && this.state.gamesByPlatform.results.map((elm) =>
                            <PlatformCard key={elm.id} {...elm} />
                        )}

                    </Row>

                </Container>


            </>
        )
    }
}

export default PlatformList
