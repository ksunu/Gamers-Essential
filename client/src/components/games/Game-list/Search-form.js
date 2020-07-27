import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GameService from '../../../service/GameService'
import './Game-list.css'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

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
                <Form ref="btn" onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Col>

                            <Link to="/games"><Button variant="dark" type="submit">Back</Button></Link>
                        </Col>
                        <Col>
                            <Form.Label>Search your favourite game</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="search" value={this.state.search} type="text" placeholder="Type here..." className="search-form" />

                            <Button variant="dark" type="submit">Submit</Button>

                        </Col>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default SearchForm