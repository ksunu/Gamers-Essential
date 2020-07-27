import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import ProfileService from '../../../service/ProfileService'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
                <Col className="event-detail-img" md={3}>
                    <Link to={`/events/${this.props.elm._id}`}>
                        <img src={this.props.elm.imageEvent} alt="" />
                    </Link>
                </Col>
                <Col className="event-detail-content" md={2}>
                    <Link to={`/events/${this.props.elm._id}`}>
                        <h5>{this.props.elm.title}</h5>
                        <p>{this.props.elm.genre}</p>
                        <p>{this.props.elm.brief}</p>
                        <p>{this.props.elm.description}</p>
                        <p>{this.props.elm.comments}</p>
                        <p>{this.props.elm.owner}</p>
                        <p>{this.props.elm.eventDate}</p>
                        <p>{this.props.elm.locationName}</p>
                    </Link>
                </Col>

                <Col>
                    <Button onClick={this.handleDeleteFav}>Remove from favourites</Button>

                </Col>

            </>
        )
    }
}

export default EventCard