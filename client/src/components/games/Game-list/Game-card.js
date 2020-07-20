import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const GameCard = ({ id, name, background_image, rating }) => {

    return (
        <>

            <Col md={3}>
                <Card className="game-card">
                    <Card.Img variant="top" src={background_image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> Rating: {rating} </Card.Text>
                        <Link to={`/games/${id}`} className="btn btn-dark btn-block btn-sm">Details</Link>
                    </Card.Body>
                </Card>

            </Col>
        </>



    )

}

export default GameCard