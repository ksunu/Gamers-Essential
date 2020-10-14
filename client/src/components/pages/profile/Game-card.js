import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../games/Game-list/Game-list.css'
import ProfileService from '../../../service/ProfileService'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Profile.css'

class GameCard extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.profileService = new ProfileService()
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavGame(this.props.elm.id, this.props.loggedInUser)
            .then(response => console.log(response))
            .then(this.props.updateFavGames())
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Col md={3} sm={4} xs={5}>
                    <div className="game-card profGame">
                        <Link to={`/games/${this.props.elm.id}`} style={{ textDecoration: 'none' }}>
                            <img src={this.props.elm.background_image} alt={this.props.elm.name} />

                            <p>{this.props.elm.name}</p>
                        </Link>
                        <Button className="fav-btn-remove" variant="dark" onClick={() => this.handleDeleteFav()}>Remove</Button>
                    </div>
                </Col>

            </>
        )
    }
}

export default GameCard

