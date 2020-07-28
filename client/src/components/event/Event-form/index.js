import React, { Component } from 'react'
import EventService from '../../../service/EventService'
import FilesService from '../../../service/FilesService'
import '../../community/Community-form/Community-form.css'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './index.css'

class EventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.id ? this.props.id.title : "",
            brief: this.props.id ? this.props.id.brief : "",
            description: this.props.id ? this.props.id.description : "",
            genre: this.props.id ? this.props.id.genre : "",
            imageEvent: this.props.id ? this.props.id.imageEvent : "",
            locationName: this.props.id ? this.props.id.locationName : "",
            eventDate: this.props.id ? this.props.id.eventDate : ""
        }
        this.eventService = new EventService()
        this.filesService = new FilesService()
    }

    // CLOUDINARYCONFIG  
    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageEvent", e.target.files[0])

        this.filesService.handleUploadEvent(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                this.setState({ imageEvent: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.eventService
            .createEvent(this.state)
            .then(() => this.props.handleEventSubmit())
            .catch(err => console.log(err))
    }

    handleUpdateSubmit = e => {
        e.preventDefault()
        this.eventService
            .editEvent(this.props.id._id, this.state)
            .then(() => this.props.handleEventSubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <div className="event-form">
                    <h3>{this.props.id ? 'Modify event' : 'Create new event'}</h3>
                    <Form onSubmit={this.props.id ? this.handleUpdateSubmit : this.handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="title" value={this.state.title} size="lg" type="text" placeholder="Your event title" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brief Description</Form.Label>
                            <Form.Control onChange={this.handleInputChange} as="textarea" name="brief" value={this.state.brief} size="lg" type="text" placeholder="Brief description of your event" />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control style={{ height: 150 }} onChange={this.handleInputChange} as="textarea" name="description" value={this.state.description} type="text" placeholder="Lorem ipsum dolor sit amet...." />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="locationName" value={this.state.locationName} type="text" placeholder="Lorem ipsum dolor sit amet...." />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="eventDate" value={this.state.eventDate} type="date" placeholder="Lorem ipsum dolor sit amet...." />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control onChange={this.handleInputChange} as="select" name="genre" value={this.state.genre} size="sm" type="text" placeholder="Small text">
                                <option value="ACTION">Action</option>
                                <option value="SHOOTER">Shooter</option>
                                <option value="RPG">Rpg</option>
                                <option value="PLATFORMS">Platforms</option>
                                <option value="HORROR">Horror</option>
                                <option value="ADVENTURE">Adventure</option>
                                <option value="STRATEGY">Strategy</option>
                                <option value="FIGHTING">Fighting</option>
                                <option value="SPORTS">Sports</option>

                            </Form.Control>

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Image (jpg or png)</Form.Label>
                            <Form.Control name="imageEvent" type="file" onChange={this.handleFileUpload} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EventForm