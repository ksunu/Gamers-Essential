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
            .then(this.props.updateCommunityList())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Row className="event-detail-card text-center">
                    <Col className="event-detail-img" lg={3}>
                        <Link to={`/events/${this.props.elm._id}`}>
                            <img src={this.props.elm.imageEvent} alt={this.props.elm._id} />
                        </Link>
                    </Col>

                    <Col lg={5}>
                        <Link to={`/events/${this.props.elm._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <h5>{this.props.elm.title}</h5>
                            <p>{this.props.elm.brief}</p>
                        </Link>
                    </Col>

                    <Col clasName="text-center" lg={4}>
                        <Link to={`/events/${this.props.elm._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <p>Owner:{this.props.elm.owner.username}</p>
                            <p>Genre:{this.props.elm.genre}</p>
                            <p>Location:{this.props.elm.locationName}</p>
                            <p>Event Date:{new Date(this.props.elm.eventDate).toLocaleDateString()}</p>
                        </Link>
                    </Col>
                </Row>
                <Button onClick={() => this.handleDeleteFav()}>Remove</Button>
            </>
        )
    }
}

export default EventCard