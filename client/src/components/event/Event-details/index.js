import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import EventService from '../../../service/EventService'
import ProfileService from '../../../service/ProfileService'
import CommentForm from './Comment-form'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class EventDetails extends Component {
    constructor() {
        super()
        this.state = {
            eventDetails: ""
        }
        this.eventService = new EventService()
        this.profileService = new ProfileService()
    }

    componentDidMount = () => this.updateEventList()

    updateEventList = () => {
        const id = this.props.match.params.id
        this.eventService
            .getOneEvent(id)
            .then(response => this.setState({ eventDetails: response.data }))
            .catch(err => console.log(err))
    }

    handleEventSubmit = () => {
        this.updateEventList()
    }

    handleFav = () => {
        this.profileService
            .addFavEvent(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))

    }

    handleDeleteFav = () => {
        this.profileService
            .deleteFavEvent(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
    }

    handleDeleteComment = () => {
        this.eventService
            .deleteComment(this.props.match.params.id)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        this.updateEventList()
    }



    render() {

        return (
            <>
                <Container as="main">

                    <h1>{this.state.eventDetails.title}</h1>
                    <h5>Created: {this.state.eventDetails.creationDate}</h5>

                    {this.props.loggedInUser && <Button onClick={this.handleFav}>Join Event</Button>}
                    {this.props.loggedInUser && <Button onClick={this.handleDeleteFav}>Unjoin Event</Button>}
                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>

                            <p><b>Description:</b> {this.state.eventDetails.description}</p>
                            <p><b>Location:</b> {this.state.eventDetails.locationName}</p>
                            <hr></hr>
                            <p><b>Genre:</b> {this.state.eventDetails.genre}</p>
                            <hr></hr>
                            <table>
                                <thead>
                                    <th>
                                        User
                                    </th>
                                    <th>
                                        Comments
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {this.state.eventDetails && this.state.eventDetails.commentsUser.map(elm => <p>{elm}:</p>)}
                                        </td>
                                        <td>
                                            {this.state.eventDetails && this.state.eventDetails.comments.map(elm => <p>{elm}</p>)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {this.props.loggedInUser && <Button onClick={this.handleDeleteComment}>Delete comment</Button>}
                            <Link className="btn btn-dark btn-md" to='/events'>Back</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.eventDetails.imageEvent} alt={this.state.eventDetails.title} />
                        </Col>
                    </Row>
                    <Row>
                        <CommentForm id={this.props.match.params.id} handleEventSubmit={this.handleEventSubmit} />
                    </Row>

                </Container>
            </>
        )
    }
}

export default EventDetails