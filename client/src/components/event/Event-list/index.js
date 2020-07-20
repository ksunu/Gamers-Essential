import React, { Component } from 'react'
import EventService from '../../../service/EventService'
import EventCard from './Event-card'
import EventForm from './../Event-form'
import './Event-list.css'

// BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class EventList extends Component {
    constructor() {
        super()
        this.state = {
            events: []
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

    handleModal = status => this.setState({ showModal: status })

    handleEventSubmit = () => {
        this.handleModal(false)
        this.updateEventList()
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Event List</h1>
                    {
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Create new event</Button>
                    }
                    <Row>
                        {this.state.events.map(elm => <EventCard key={elm._id} {...elm} />)}
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <EventForm handleEventSubmit={this.handleEventSubmit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default EventList