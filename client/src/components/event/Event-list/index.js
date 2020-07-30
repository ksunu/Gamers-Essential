import React, { Component } from 'react'
import EventService from '../../../service/EventService'
import EventCard from './Event-card'
import EventForm from './../Event-form'
import './Event-list.css'

// BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class EventList extends Component {
    constructor() {
        super()
        this.state = {
            events: undefined,
            showModal: false,
            id: ""
        }
        this.eventService = new EventService()
    }

    componentDidMount = () => this.updateEventList()

    updateEventList = () => {
        this.eventService
            .getAllEvent()
            .then(response => this.setState({ events: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = (status, id) => {

        this.setState({ showModal: status })
        this.setState({ id: id })
    }

    handleEventSubmit = () => {
        this.handleModal(false)
        this.updateEventList()
    }

    handleDelete = id => {

        const arr = [...this.state.events]
        const arrFiltered = arr.filter(elm => elm._id !== id)
        this.setState({ events: arrFiltered })
        this.eventService
            .deleteEvent(id)
            .then(response => console.log(response))
    }


    render() {
        return (
            <>
                <Container>
                    <h1>Event List</h1>
                    {this.props.loggedInUser &&
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn">Create new event</Button>
                    }
                    
                        {this.state.events && this.state.events.map(elm => <EventCard key={elm._id} elm={elm} handleModal={this.handleModal} handleDelete={this.handleDelete} loggedInUser={this.props.loggedInUser} className="event-detail-card" />)}
                </Container>
                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body className="modal-page-event">
                        {!this.state.id ? <EventForm handleEventSubmit={this.handleEventSubmit} /> : <EventForm handleEventSubmit={this.handleEventSubmit} id={this.state.id} />}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default EventList