import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const Games = () => {

    return (
        <>
            <Container>



                <h1>Games</h1>
                <Row className="game-main-btn">
                    <Col md={4} className="btn">
                        <Link to="games/Allgames"><img src="https://ph-files.imgix.net/4fcdb9d7-dfbe-40ed-b0cf-5d00721cd1cb?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="allgames" /> <br />
                            <Button className="btn-1"><span>All Games</span></Button>
                        </Link>
                    </Col>
                    <Col md={4} className="btn">
                        <Link to="games/genres"><img src="https://gamegenre.files.wordpress.com/2012/05/cover-by-dyvanno.jpg?w=510&h=237" atl="genres" /> <br />
                            <Button className="btn-2"><span>By Genre</span></Button></Link>
                    </Col>
                    <Col md={4} className="btn">
                        <Link to="games/platforms"><img src="https://media.gizmodo.co.uk/wp-content/uploads/2018/02/console_colours-620x349.png" alt="platforms" /> <br />
                            <Button className="btn-3"><span>By Platform</span></Button></Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Games