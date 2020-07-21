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
    .then(() => this.props.handleCommunitySubmit())
    .catch(err => console.log(err))
    }



    render() {
        

        return (
            <>
                
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
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