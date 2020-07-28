import React, { Component } from 'react'
import GameService from '../../../service/GameService'
import './Game-list.css'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
        this.refs.btn.setAttribute("disabled", "disabled")
        // .then(() => this.props.handleCommunitySubmit())
        // .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Form ref="btn" onSubmit={this.handleFormSubmit} className="search-area">
                    <Form.Group>
                        <Form.Label>Search your favourite game</Form.Label>
                        <Row>
                            <Form.Control onChange={this.handleInputChange} name="search" value={this.state.search} type="text" placeholder="Type here..." className="search-form" />

                            <Button variant="dark" type="submit">Submit</Button>

                        </Row>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default SearchForm