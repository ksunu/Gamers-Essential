import React, { Component } from 'react'
import GameService from '../../../service/GameService'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {

            search: ""

        }
        this.gameService = new GameService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.handleForm(this.state.search)
        this.refs.btn.setAttribute("disabled","disabled")
        // .then(() => this.props.handleCommunitySubmit())
        // .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Form ref="btn" onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Game search</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="search" value={this.state.search} size="lg" type="text" placeholder="Search your game..." />
                    </Form.Group>
                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default SearchForm