import React, { Component } from 'react'
import CoasterService from '../../../service/CoasterService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CoasterForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            length: '',
            inversions: '',
            imageUrl: ''
        }
        this.coasterService = new CoasterService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.coasterService
            .createCoaster(this.state)
            .then(() => this.props.handleCoasterSubmit())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h3>Nueva montaña</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.title} name="title" type="text" />
                        <Form.Text className="text-muted">Sin faltas de ortografía.</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.length} name="length" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.inversions} name="inversions" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default CoasterForm