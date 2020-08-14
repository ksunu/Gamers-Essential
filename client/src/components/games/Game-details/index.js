import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'

import GameService from '../../../service/GameService'
import ProfileService from '../../../service/ProfileService'
import Spinner from '../../ui/Spinner'
import './Game-details.css'
import Profile from '../../pages/profile/index'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class GameDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameDetails: "",
            screenShots: "",
            gameDetails2: [] 
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
            .then(this.props.handleToast(true, 'Game Added to Favourites'))
        
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavGame(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
            .then(this.props.handleToast(true, 'Game Deleted from Favourites'))

        
    
    }

    updateFavGames = () => {

        this.props.loggedInUser.favGame.map(elm => {

            this.gameService.getOneGame(elm)
                .then(response => {

                    let joined = this.state.gameDetails2.concat(response.data)
                    this.setState({ gameDetails2: joined })
                })

                // this.state.gameDetails.push(response.data))
                .catch(err => console.log(err, 'ha fallado'))

        })


    }
 
    cleanGameDetails = () => this.setState({gameDetails2: []})




    render() {




        console.log(this.state.gameDetails.clip)

        return (
            <>
    
                <Link to="/games"><Button variant="dark" type="submit" className="btn-default">&#10229;</Button></Link>

                {!this.state.gameDetails && this.state.screenShots ? <Spinner /> :



                    <Container as="main" className="detail-container">
                        <h1>{this.state.gameDetails.name}</h1>

                            {this.props.loggedInUser && <Button className="btn btn-dark btn-md back-btn-games fav-btn-add" onClick={this.handleFav}>Add to favourites</Button>}   

                                {this.props.loggedInUser && <Button className="btn btn-dark btn-md back-btn-games fav-btn-remove" onClick={this.handleDeleteFav}>Remove from favourites</Button>}   
                        <Row className="image-detail">

                            <Col>
                                <Carousel autoPlay interval="3000" transitionTime="3000" showArrows={true} >
                                    {this.state.screenShots && this.state.screenShots.results.map(elm => <div><img src={elm.image} alt={elm.id} /></div>)}
                                </Carousel>

                            </Col>

                        </Row>
                        <Row className="game-detail mb-5">

                            <p>{this.state.gameDetails.description_raw}</p>
                        </Row>
                        <Row className=" mb-5">
                            <Col className="video-player" md={12}>

                            {this.state.gameDetails && this.state.gameDetails.clip ? <ReactPlayer url={this.state.gameDetails && this.state.gameDetails.clip.clips.full} playing={true} volume={0} loop={true} controls={true} /> : <h1>No video available</h1>}
                                
                            </Col>
                        </Row>
                        <Row className=" mb-5">
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