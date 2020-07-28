import React, { Component } from 'react'
import CommunityService from '../../../service/CommunityService'
import FilesService from '../../../service/FilesService'
import './Community-form.css'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                this.props.handleToast(true, 'Uploaded done')
            })
            .catch(err => console.log(err))
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.state.imageProd && this.communityService
            .createCommunity(this.state)
            .then(() => this.props.handleCommunitySubmit())
            .catch(err => console.log(err))
    }

    handleUpdateSubmit = e => {
        e.preventDefault()
        this.state.imageProd && this.communityService
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
                            <Form.Control className="form-control" onChange={this.handleInputChange} name="title" value={this.state.title} size="lg" type="text" placeholder="Your game title" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brief Description</Form.Label>
                            <Form.Control onChange={this.handleInputChange} as="textarea" name="brief" value={this.state.brief} size="lg" type="text" placeholder="Brief description of your game" />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control style={{ height: 150 }} onChange={this.handleInputChange} as="textarea" name="description" value={this.state.description} type="text" placeholder="Lorem ipsum dolor sit amet...." />
                        </Form.Group>
                        <br />
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Image: jpg or png *ONLY*</Form.Label>
                                    <Form.Control name="imagProd" type="file" onChange={this.handleFileUpload} />
                                </Form.Group>

                            </Col>
                            <Col>
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

                            </Col>
                        </Row>

                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default CommunityForm