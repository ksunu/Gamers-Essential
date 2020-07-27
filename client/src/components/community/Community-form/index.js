import React, { Component } from 'react'
import CommunityService from '../../../service/CommunityService'
import FilesService from '../../../service/FilesService'
import './Community-form.css'

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
        this.filesService = new FilesService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }



    // CLOUDINARYCONFIG  
    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageProd", e.target.files[0])

        this.filesService.handleUploadCommunity(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                this.setState({ imageProd: response.data.secure_url })
            })
            .catch(err => console.log(err))
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

        return (
            <>
                <div className="form">
                    <h3>{this.props.id ? 'Modify game' : 'Create new game'}</h3>
                    <Form onSubmit={this.props.id ? this.handleUpdateSubmit : this.handleFormSubmit}>
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
                            <Form.Label>Image (jpg or png)</Form.Label>
                            <Form.Control name="imagProd" type="file" onChange={this.handleFileUpload} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default CommunityForm