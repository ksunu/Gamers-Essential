import React, { Component } from 'react'

import AuthService from '../../../service/AuthService'
import './index.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.handleToast(true, `Logged in`)
                this.props.history.push('/')
            })
            .catch(err => console.log(err.response.data.message))   // Error handling
    }

    render() {
        return (
            <Container as="main">

                <Row>
                    <Col md={{ offset: 3, span: 6 }} className="login">
                        <img src="https://image.flaticon.com/icons/svg/2943/2943415.svg" alt="" />
                        <h3>Log In</h3>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" />
                                <Form.Text className="text-muted">Minimum 3 characters...</Form.Text>
                            </Form.Group>

                            <Button variant="dark" type="submit">Log In</Button>
                        </Form>

                    </Col>
                </Row>


            </Container>
        )
    }
}

export default LoginForm