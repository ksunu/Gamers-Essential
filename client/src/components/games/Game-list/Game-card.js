import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'

import './Game-list.css'

const GameCard = ({ id, name, background_image, rating }) => {

    return (
        <>

            <Col md={3} sm={4} xs={5}>
                <div className="game-card">
                    <Link to={`/games/${id}`} style={{textDecoration: 'none'}}>
                        <img src={background_image} alt={name} />

                        <p>{name}</p>
                    </Link>
                </div>
            </Col>
        </>



    )

}

export default GameCard