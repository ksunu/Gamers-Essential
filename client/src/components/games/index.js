import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to="games/Allgames">AllGames</Link>
                    </Row>
                      <Row>
                        <Link to="games/genres">Filter by Genres</Link>
                      </Row>
                </Container>

            </>
        )
    }
}

export default Games