import React from 'react'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


const Index = props => {

    return (
        <>
            <Container>
                <h1>We gamers, you feel?</h1>
                <p>Cut the crap...</p>
                {props.loggedInUser ?
                    (
                        <h3>Welcome {props.loggedInUser.username}</h3>
                    ) : (
                        <>
                            <Link>
                                <div className="links">
                                    <Link to="/signup" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}>Signup</Link>
                                </div>
                            </Link>
                            <Link>
                                <div className="links">
                                    <Link to="/login" style={{ textDecoration: 'none' }} activeStyle={{ color: 'white' }}>Login</Link>
                                </div>
                            </Link>
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default Index