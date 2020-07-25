import React, { Component } from 'react'
import GameService from '../../../service/GameService'

// BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class GenreForm extends Component {
    constructor() {
        super()
        this.state = {


            genre: ""
            // action: "",
            // indie: "",
            // shooter: "",
            // arcade: "",
            // adventure: "",
            // strategy: "",
            // casual: "",
            // simulation: "",
            // puzzle: "",
            // platformer:"",
            // racing:"",
            // sports:"",
            // massively-multiplayer: "",
            // family:"",
            // fighting: "",
            // board-games: "",
            // educational: "",
            // card: "",
           //"role-playing-games-rpg",

        }
        this.gameService = new GameService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.handleForm(this.state.genre)
        // .then(() => this.props.handleCommunitySubmit())
        // .catch(err => console.log(err))
    }

    render() {

        return (
            <>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Intrdouce Genre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="genre" value={this.state.genre} size="lg" type="text" placeholder="Type here the genre..." />
                    </Form.Group>
                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default GenreForm