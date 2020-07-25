import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './Game-list.css'

const GameCard = ({ id, name, background_image, rating }) => {

    return (
        <>

            <Col md={2} sm={3} xs={4}>
                <Card className="game-card">
                    <Link to={`/games/${id}`}>
                        <Card.Img src={background_image} alt={name} />
                        <Card.ImgOverlay>
                            <Card.Title></Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                        <p>{name}</p>
                    </Link>
                </Card>
            </Col>
        </>



    )

}

export default GameCard