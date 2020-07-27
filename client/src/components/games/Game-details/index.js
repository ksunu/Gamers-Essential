import React, { Component } from 'react'

import GameService from '../../../service/GameService'
import ProfileService from '../../../service/ProfileService'
import './Game-details.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'



class GameDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameDetails: ""
        }
        this.gameService = new GameService()
        this.profileService = new ProfileService()

    }

    componentDidMount = () => {

        const id = this.props.match.params.id
        this.gameService
            .getOneGame(id)
            .then(response => this.setState({ gameDetails: response.data }))
            .catch(err => console.log(err))

    }

    handleFav = () => {

        this.profileService
            .addFavGame(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavGame(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))

    }


    render() {

        return (
            <>

                <Container as="main">
                    <h1>{this.state.gameDetails.name}</h1>
                    <Link className="btn btn-dark btn-md" to='/games'>Back</Link>

                    <Button onClick={this.handleFav}>Add to favourites</Button>
                    <Button onClick={this.handleDeleteFav}>Remove from favourites</Button>
                    <Row className="game-detail">
                        <Col md={{ span: 5, offset: 1 }}>

                            <p>{this.state.gameDetails.name_original}</p>
                            <hr />
                            <p>{this.state.gameDetails.description_raw}</p>
                            <hr />




                        </Col>
                        <Col md={{ span: 5, offset: 1 }} className="image-detail">
                            <img src={this.state.gameDetails.background_image} alt={this.state.gameDetails.name} />
                            <img src={this.state.gameDetails.background_image_additional} alt={this.state.gameDetails.name} />
                            <p><b>Release Date:</b> {this.state.gameDetails.released}</p>
                            <p><b>Rating:</b> {this.state.gameDetails.rating} </p>
                            <p><b>Metascore:</b> {this.state.gameDetails.metacritic}</p>
                            <p><b>Platforms:</b> {this.state.gameDetails.platform}</p>
                        </Col>
                    </Row>

                </Container>
            </>
        )
    }
}

export default GameDetails