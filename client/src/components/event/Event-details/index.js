import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import EventService from '../../../service/EventService'
import ProfileService from '../../../service/ProfileService'
import CommentForm from './Comment-form'
import GmapMap from '../../maps/gMapsMap/map'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import './Event-details.css'


class EventDetails extends Component {
    constructor() {
        super()
        this.state = {
            eventDetails: "",
            showModal: false,


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
            .then(this.props.handleToast(true, 'Joined Event'))

    }

    handleDeleteFav = () => {
        this.profileService
            .deleteFavEvent(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
            .then(this.props.handleToast(true, 'Unjoined from Event'))
        
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
                <Link style={{ textDecoration: 'none' }} to='/events'><Button variant="dark" className="btn-default">&#10229;</Button></Link>
                <Container className="event-detail-page">
                    <Row className="justify-content-end">

                    {this.props.loggedInUser && <Button variant="dark" className="fav-btn-add" onClick={this.handleFav}>Join Event</Button>}
                    {this.props.loggedInUser && <Button variant="dark" className="fav-btn-remove" onClick={this.handleDeleteFav}>Unjoin Event</Button>}
                    </Row>
                    <Row className="event-title text-center">
                        <Col className=" text-center">
                        <h1>{this.state.eventDetails.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src={this.state.eventDetails.imageEvent} alt={this.state.eventDetails.title} />
                        </Col>
                        <Col className="my-auto" md={6}>
                            <p><b>Genre: </b>{this.state.eventDetails.genre}</p>
                            <p><b>Location: </b>{this.state.eventDetails && this.state.eventDetails.loc.city}</p>
                            <p>Event Date: {new Date(this.state.eventDetails.eventDate).toLocaleDateString()}</p>

                        </Col>

                    </Row>

                    <Row >
                        <Col  className="event-description text-center">
                            <p>{this.state.eventDetails.description}</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 20, marginBottom: 40 }}>
                    {this.state.eventDetails && <GmapMap pos={this.state.eventDetails.loc.coordinates} marker={true} />}
                    </Row>
                    <Row style={{ marginTop: 20, paddingBottom: 40 }}>

                        <Col md={12}>
                            <div className="box box1">
                                {this.props.loggedInUser && <Link style={{ textDecoration: 'none', color: 'white', fontSize: 30, marginTop: 30 }} onClick={() => this.handleModal(true)}> <b className="oddboxinner">Insert comments</b></Link>}
                                {this.props.loggedInUser && <Link style={{ textDecoration: 'none', color: 'white', fontSize: 30, marginTop: 30 }} onClick={this.handleDeleteComment}> <b className="oddboxinner2">Delete comment</b></Link>}
                                <table className="table-comments">

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
                            </div>


                        </Col>

                    </Row>
<br></br>

                    <Modal dialogClassName="modal-window" size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                        <Modal.Body className="modal-page">
                            <CommentForm id={this.props.match.params.id} handleEventSubmit={this.handleEventSubmit} handleModal={() => this.handleModal()} />
                        </Modal.Body>
                    </Modal>

                   

                </Container>
            </>
        )
    }
}

export default EventDetails