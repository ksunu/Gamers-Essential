import React, { Component } from 'react'

import GameService from '../../../service/GameService'
import ProfileService from '../../../service/ProfileService'
import './Game-details.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'



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

        console.log(this.state.gameDetails.clip)

        return (
            <>
                <Link className="btn btn-dark btn-md back-btn-games" to='/games'>Back</Link>

                <Container as="main" className="detail-container">
                    <h1>{this.state.gameDetails.name}</h1>

                    <Button onClick={this.handleFav}>Add to favourites</Button>
                    <Button onClick={this.handleDeleteFav}>Remove from favourites</Button>
                    <Row className="image-detail">
                        <Col>
                        <img src={this.state.gameDetails.background_image} alt={this.state.gameDetails.name} />
                            
                        </Col>
                        <Col>
                            <img src={this.state.gameDetails.background_image_additional} alt={this.state.gameDetails.name} />
                            
                        </Col>

                    </Row>
                    <Row className="game-detail">

                            <p>{this.state.gameDetails.description_raw}</p>
                        </Row>
                    <Row>
                        <Col className="video-player" md={12}>
                            <ReactPlayer url={this.state.gameDetails && this.state.gameDetails.clip.clips.full} playing={true} volume={0} loop={true} controls={true} />
                        </Col>
                        </Row>
                    <Row>
                        <Col className="game-info" md={6}>
                            
                           
                            <p>Release Date:  {this.state.gameDetails.released}</p> 
                      

                            <p>Overall Rating Rawg:  {this.state.gameDetails.rating}</p> 
                              

                            <p> Metacritic Score:  {this.state.gameDetails.metacritic}</p>
                              
                           
                            
</Col>
<Col className="game-info" md={6}>

                        <p><b>Available Platforms:</b> {this.state.gameDetails && this.state.gameDetails.platforms.map(elm => <p>{elm.platform.name}</p>)}</p>
         </Col>          

                    </Row>

                </Container>
            </>
        )
    }
}

export default GameDetails