import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import EventService from '../../../service/EventService'
import ProfileService from '../../../service/ProfileService'
import CommentForm from './Comment-form'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

import './Event-details.css'


class EventDetails extends Component {
    constructor() {
        super()
        this.state = {
            eventDetails: "",
            showModal: false
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


    handleModal = (status) => {

        this.setState({ showModal: status })

    }




    render() {

        return (
            <>
                <Link className="btn btn-dark btn-md" to='/events'>Back</Link>
                <Container className="event-detail-page">
                    {this.props.loggedInUser && <Button className="btn btn-dark btn-md" onClick={this.handleFav}>Join Event</Button>}
                    {this.props.loggedInUser && <Button className="btn btn-dark btn-md" onClick={this.handleDeleteFav}>Unjoin Event</Button>}
                    <Row className="event-title">
                        <h1>{this.state.eventDetails.title}</h1>

                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src={this.state.eventDetails.imageEvent} alt={this.state.eventDetails.title} />
                        </Col>
                        <Col md={6}>
                            <p><b>Genre: </b>{this.state.eventDetails.genre}</p>
                            <p><b>Location: </b>{this.state.eventDetails.locationName}</p>
                            <p>Event Date: {new Date(this.state.eventDetails.eventDate).toLocaleDateString()}</p>

                        </Col>

                    </Row>

                    <Row>
                        <Col className="event-description">
                            <p>{this.state.eventDetails.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <Table striped bordered variant="dark" className="comments-table">
                                <thead>
                                    <th>User</th>
                                    <th>Comments</th>
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
                            </Table>
                            {this.props.loggedInUser && <Button className="btn btn-dark btn-md" onClick={this.handleDeleteComment}>Delete comment</Button>}
                            <Button className="btn btn-dark btn-md" onClick={() => this.handleModal(true)}>Insert Comment</Button>
                        </Col>

                    </Row>


                    <Modal dialogClassName="modal-window" size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                        <Modal.Body className="modal-page">
                            <CommentForm id={this.props.match.params.id} handleEventSubmit={this.handleEventSubmit} handleModal={() => this.handleModal()} />
                        </Modal.Body>
                    </Modal>

                </Container >
            </>
        )
    }
}

export default EventDetails