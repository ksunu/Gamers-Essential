import React from 'react'
import { Link } from 'react-router-dom'


// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const GameCard = ({ id, name, background_image, rating }) => {

    return (
        <>

            <Col md={2}>
                <Card className="game-card">
                    <Link to={`/games/${id}`}>
                        <Card.Img src={background_image} alt={name} />
                        <Card.ImgOverlay>
                            <Card.Title><h5>{name}</h5></Card.Title>
                            <Card.Text>
                                Aqui va otro texto TO
                            </Card.Text>
                            <Card.Text>Rating: {rating}</Card.Text>
                        </Card.ImgOverlay>
                    </Link>
                </Card>
            </Col>
        </>



    )

}

export default GameCard