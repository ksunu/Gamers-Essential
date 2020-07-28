import React, { Component } from 'react'
import EventService from '../../../service/EventService'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: "",
            commentsUser: ""
        }
        this.eventService = new EventService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.eventService
            .createComment(this.props.id, this.state)
            .then(response => console.log(response))
            .then(this.props.handleModal(false))
            .then(() => this.props.handleEventSubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>User</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="commentsUser" value={this.state.commentsUser} size="lg" type="text" />

                        <Form.Label>Post your comment</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="comments" value={this.state.comments} size="lg" type="text" />
                        <Button variant="dark" type="submit">Submit </Button>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default CommentForm