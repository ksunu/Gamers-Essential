import React, { Component } from 'react'
import ProfileService from '../../../service/ProfileService'
import FilesService from '../../../service/FilesService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AvatarForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            avatar: ""

        }
        this.profileService = new ProfileService()
        this.filesService = new FilesService()
    }


    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("avatar", e.target.files[0])

        this.filesService.handleUploadAvatar(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                this.setState({ avatar: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }

    handleUpdateSubmit = e => {
        e.preventDefault()
        this.profileService
            .updateAvatar(this.props.loggedInUser._id, this.state.avatar)
            .then(() => this.props.handleAvatarSubmit())
            .catch(err => console.log(err))
    }

    render() {

        console.log('avatar', this.state.avatar)
        return (
            <>
                <h1>holaaaaa</h1>
                <Form onSubmit={this.handleUpdateSubmit}>
                    <Form.Group>
                        <Form.Label>Image (jpg or png)</Form.Label>
                        <Form.Control name="imageEvent" type="file" onChange={this.handleFileUpload} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default AvatarForm