import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import allGamesImg from '../assets/All_Games.jpeg'
import byGenreImg from '../assets/By_Genre.jpg'
import byPlatform from '../assets/By_Platform.jpg'

const Games = () => {

    return (
        <>

            <Container>



                <h1>Games</h1>
                <Row className="game-main-btn">
                    <Col md={4} className="btn">
                        <Link to="games/Allgames"><img src={allGamesImg} alt="allgames" /> <br />
                            <Button className="btn-1"><span>All Games</span></Button>
                        </Link>
                    </Col>
                    <Col md={4} className="btn">
                        <Link to="games/genres"><img src={byGenreImg} alt="genres" /> <br />
                            <Button className="btn-2"><span>By Genre</span></Button></Link>
                    </Col>
                    <Col md={4} className="btn">
                        <Link to="games/platforms"><img src={byPlatform} alt="platforms" /> <br />
                            <Button className="btn-3"><span>By Platform</span></Button></Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Games