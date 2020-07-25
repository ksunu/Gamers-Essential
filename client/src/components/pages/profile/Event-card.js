import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import ProfileService from '../../../service/ProfileService'
import Button from 'react-bootstrap/Button'

class EventCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}


        this.profileService = new ProfileService()
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavEvent(this.props.elm._id, this.props.loggedInUser)
            .then(response => console.log(response))
        this.props.updateCommunityList()
    }

    render() {
        return (
            <>
                <Col md={4}>
                    <p>{this.props.elm.brief}</p>
                    <p>{this.props.elm.title}</p>
                    <p>{this.props.elm.description}</p>
                    <p>{this.props.elm.genre}</p>
                    <img src={this.props.elm.imageEvent} alt={this.props.elm.title} />
                    <p>{this.props.elm.comments}</p>
                    <p>{this.props.elm.owner}</p>
                    <p>{this.props.elm.eventDate}</p>
                    <p>{this.props.elm.locationName}</p>
                    <Button onClick={this.handleDeleteFav}>Remove from favourites</Button>
                </Col>
            </>
        )
    }
}

export default EventCard