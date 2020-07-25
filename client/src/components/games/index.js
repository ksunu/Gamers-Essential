import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class Games extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="game-main-btn">
                        <Link to="games/Allgames"><img src="https://ph-files.imgix.net/4fcdb9d7-dfbe-40ed-b0cf-5d00721cd1cb?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="" /> <br />AllGames</Link>
                   
                        <Link to="games/genres">Filter by Genres</Link>
                
                        <Link to="games/platforms">Filter by Platforms</Link>
                    </Row>
                </Container>

            </>
        )
    }
}

export default Games