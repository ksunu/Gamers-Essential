import React from 'react'

import './Genre-list.css'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const GenreBar = props => {

    return (
        <>
                <Row>
                    <Col md={12}>
                    <Button onClick={() => props.handleButtonBar('action')} className="genre-search-btn">Action</Button>
                        <Button onClick={() => props.handleButtonBar('adventure')} className="genre-search-btn">Adventure</Button>
                        <Button onClick={() => props.handleButtonBar('arcade')} className="genre-search-btn">Arcade</Button>
                        <Button onClick={() => props.handleButtonBar('board-games')} className="genre-search-btn">Board Games</Button>
                        <Button onClick={() => props.handleButtonBar('educational')} className="genre-search-btn">Educational</Button>
                        <Button onClick={() => props.handleButtonBar('family')} className="genre-search-btn">Family</Button>
                        <Button onClick={() => props.handleButtonBar('fighting')} className="genre-search-btn">Fighting</Button>
                        <Button onClick={() => props.handleButtonBar('indie')} className="genre-search-btn">Indie</Button>
                    </Col>
                </Row>
                <Row className="genre-bar">
                    <Col md={12} sm={6}>
                        <Button onClick={() => props.handleButtonBar('massively-multiplayer')} className="genre-search-btn">Multi-Player</Button>
                        <Button onClick={() => props.handleButtonBar('platformer')} className="genre-search-btn">Platformer</Button>
                        <Button onClick={() => props.handleButtonBar('puzzle')} className="genre-search-btn">Puzzle</Button>
                        <Button onClick={() => props.handleButtonBar('role-playing-games-rpg')} className="genre-search-btn">RPG</Button>
                        <Button onClick={() => props.handleButtonBar('shooter')} className="genre-search-btn">Shooter</Button>
                        <Button onClick={() => props.handleButtonBar('simulation')} className="genre-search-btn">Simulation</Button>
                        <Button onClick={() => props.handleButtonBar('sports')} className="genre-search-btn">Sports</Button>
                        <Button onClick={() => props.handleButtonBar('strategy')} className="genre-search-btn">Strategy</Button>
                    </Col>
                </Row>
        </>

    )
}


export default GenreBar