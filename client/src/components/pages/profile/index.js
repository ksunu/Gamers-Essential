import React, { Component } from 'react'
import ProfileService from '../../../service/ProfileService'
import GamesService from '../../../service/GameService'
import GameCard from './Game-card'
import AvatarForm from './Avatar-form'
import './Profile.css'

// BOOTSTRAP COMPONENTS
import CommunityCard from './Community-card'
import EventCard from './Event-card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            allProfile: undefined,
            gameDetails: [],
            showModal: false



        }

        this.profileService = new ProfileService()
        this.gameService = new GamesService()
    }

    componentDidMount() {

        this.updateCommunityList()
        this.updateFavGames()

    }

    updateCommunityList = () => {

        this.profileService
            .getAllProfile(this.props.loggedInUser._id)
            .then(response => this.setState({ allProfile: response.data }))
            .catch(err => console.log(err))
    }



    updateFavGames = () => {

        this.props.loggedInUser.favGame.map(elm => {

            this.gameService.getOneGame(elm)
                .then(response => {

                    let joined = this.state.gameDetails.concat(response.data)
                    this.setState({ gameDetails: joined })
                })

                // this.state.gameDetails.push(response.data))
                .catch(err => console.log(err, 'ha fallado'))

        })


    }

    handleModal = (status) => {

        this.setState({ showModal: status })

    }

    handleAvatarSubmit = () => {
        this.handleModal(false)
        this.updateCommunityList()
    }

    render() {

        console.log(this.state.allProfile && this.state.allProfile)

        return (
            <>
                <Container>

                    <section>

                        <Modal size="md" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                            <Modal.Body>
                                <AvatarForm handleAvatarSubmit={() => this.handleAvatarSubmit()} loggedInUser={this.props.loggedInUser} updateCommunityList={() => this.updateCommunityList} />
                            </Modal.Body>
                        </Modal>
                        <article className="profile-section">
                            <Row style={{marginBottom: 70}}>
                                <Col className="profile-pic" md={3}>
                                    <img src={this.state.allProfile && this.state.allProfile.avatar} alt={this.props.loggedInUser.username} /> <br />
                                    <Button onClick={() => this.handleModal(true)} variant="dark" size="xs" style={{ width: 150 }}>Upload new avatar</Button>
                                </Col>
                                <Col md={8}>
                                    <h3>¡Hi {this.props.loggedInUser.username}, nice to see you again!</h3>
                                </Col>
                            </Row>
                        </article>

                        <article className="community-section">

                            <h2>Favourite Community</h2>
                            <Row>
                                {this.state.allProfile && this.state.allProfile.favCommunity.map(elm => <CommunityCard key={elm._id} elm={elm} loggedInUser={this.props.loggedInUser} updateCommunityList={() => this.updateCommunityList} />)}
                            </Row>

                        </article>


                        <hr></hr>
                        <article>
                            <h2> Favourite Events</h2>
                            <Row>
                                {this.state.allProfile && this.state.allProfile.favEvent.map(elm => <EventCard key={elm._id} elm={elm} loggedInUser={this.props.loggedInUser} updateCommunityList={() => this.updateCommunityList} />)}
                            </Row>

                        </article>
                        <hr></hr>
                        <article>
                            <h2>Favourite Games</h2>
                            <Row>


                                {this.state.gameDetails && this.state.gameDetails.map(elm =>

                                    <GameCard key={elm.id} elm={elm} loggedInUser={this.props.loggedInUser} updateFavGames={() => this.updateFavGames} />
                                )}

                            </Row>
                        </article>

                    </section>


                </Container>

            </>
        )
    }
}

export default Profile
