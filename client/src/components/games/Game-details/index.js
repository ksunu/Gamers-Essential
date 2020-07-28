import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'

import GameService from '../../../service/GameService'
import ProfileService from '../../../service/ProfileService'
import Spinner from '../../ui/Spinner'
import './Game-details.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class GameDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameDetails: "",
            screenShots: ""
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
        this.gameService
            .getOneGameScreensShots(id)
            .then(response => this.setState({ screenShots: response.data }))



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

                {!this.state.gameDetails && this.state.screenShots ? <Spinner /> :



                    <Container as="main" className="detail-container">
                        <h1>{this.state.gameDetails.name}</h1>
                        <div className="fav-btns">
                            <Button className="btn btn-dark btn-md back-btn-games" onClick={this.handleFav}>Add to favourites</Button>
                            <span className="btn-fav-2">
                                <Button className="btn btn-dark btn-md back-btn-games" onClick={this.handleDeleteFav}>Remove from favourites</Button>
                            </span>
                        </div>

                        <Row className="image-detail">

                            <Col>
                                <Carousel autoPlay interval="3000" transitionTime="3000" showArrows={true} >
                                    {this.state.screenShots && this.state.screenShots.results.map(elm => <div><img src={elm.image} alt={elm.id} /></div>)}
                                </Carousel>

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

                                <p><b>Available Platforms:</b> {this.state.gameDetails && this.state.gameDetails.platforms.map(elm => <span>{elm.platform.name}, </span>)}</p>
                            </Col>

                        </Row>




                    </Container>

                }
            </>
        )
    }
}

export default GameDetails