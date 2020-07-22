import React, { Component } from 'react'
import CommunityService from '../../../service/CommunityService'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CommunityForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.id ? this.props.id.title : "",
            brief: this.props.id ? this.props.id.brief : "",
            description: this.props.id ? this.props.id.description : "",
            genre: this.props.id ? this.props.id.genre : "",
            imageProd: this.props.id ? this.props.id.imageProd : "",
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
            .createCommunity(this.state)
            .then(() => this.props.handleCommunitySubmit())
            .catch(err => console.log(err))
    }

    handleUpdateSubmit = e => {
        e.preventDefault()
        this.communityService
            .editCommunity(this.props.id._id, this.state)
            .then(() => this.props.handleCommunitySubmit())
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.props.id)
        return (
            <>
                <h3>New game</h3>
                <Form onSubmit={this.props.id ? this.handleUpdateSubmit : this.handleFormSubmit }>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="title" value={this.state.title} size="lg" type="text" placeholder="Your game title" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Brief Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="brief" value={this.state.brief} size="lg" type="text" placeholder="Brief description of your game" />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="description" value={this.state.description} type="text" placeholder="Lorem ipsum dolor sit amet...." />
                    </Form.Group>
                    <br />
                    {/* TO-DO checkbox Genre */}
                    <Form.Group>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="genre" value={this.state.genre} size="sm" type="text" placeholder="Small text" />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="imageProd" value={this.state.imageProd} size="sm" type="text" placeholder="imgURL" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default CommunityForm