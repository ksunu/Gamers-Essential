import React, { Component } from 'react'
import CommunityService from '../../../service/CommunityService'

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
        this.communityService = new CommunityService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.communityService
            .createComment(this.props.id, this.state)
            .then(response => console.log(response))
            .then(this.props.handleModal(false))
            .then(() => this.props.handleCommunitySubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label style={{ fontSize: 30 }}>User</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="commentsUser" value={this.state.commentsUser} size="lg" type="text" />

                        <Form.Label style={{ fontSize: 30 }}>Post your comment</Form.Label>
                        <Form.Control style={{height: 200}} onChange = { this.handleInputChange } as="textarea" name="comments" value={this.state.comments} size="lg" type="text" />
                        <p style={{ color: 'lightgrey', fontSize: 16 }}>Max. 140 characters</p>
                        <Button variant="dark" type="submit">Submit </Button>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default CommentForm