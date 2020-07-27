import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import AuthService from './../../../service/AuthService'
import './Navbar.css'

// BOOTSTRAP COMPONENT
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Navigation extends Component {
    constructor(props) {
        super(props)
        this.AuthService = new AuthService()
    }

    logout = () => {
        this.AuthService
            .logout()
            .then(() => {
                this.props.setTheUser(false)
                this.props.handleToast(true, 'User disconnected')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar expand="lg" sticky="top" className="navbar-main" >
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="nav-title">_GamersEssential</div></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/" style={{ textDecoration: 'none' }} exact activeStyle={{ color: 'white' }}>/</NavLink>
                            </div>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/games" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}><div>Games</div></NavLink>
                            </div>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/community" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}>Community</NavLink>
                            </div>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/events" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}>Events</NavLink>
                            </div>
                        </Nav.Link>

                        {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span" style={{ textDecoration: 'none' }}>
                                    <div className="links">
                                        <span onClick={this.logout} className="logout">
                                            <div>
                                                <img src="../../../log.svg" alt="off" />
                                            </div>
                                        </span>
                                    </div>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as="span">
                                        <div className="links">
                                            <NavLink to="/signup" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}>Signup</NavLink>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <div className="links">
                                            <NavLink to="/login" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}>Login</NavLink>
                                        </div>
                                    </Nav.Link>
                                </>
                            )
                        }
                        <Nav.Link as="span">
                            <NavLink to="/profile" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }} className="link-profile">Hi, {this.props.loggedInUser ? this.props.loggedInUser.username : 'guest'}</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Navigation