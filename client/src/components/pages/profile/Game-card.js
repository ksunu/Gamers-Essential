import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import '../../games/Game-list/Game-list.css'

const GameCard = props => {

    return (
        <>

            <Col md={2} sm={3} xs={4}>
                <Card className="game-card">
                    <Link to={`/games/${props.elm.data.id}`}>
                        <img src={props.elm.data.background_image} alt={props.elm.data.name} />

                        <p>{props.elm.data.name}</p>
                    </Link>
                </Card>
            </Col>
        </>



    )

}

export default GameCard