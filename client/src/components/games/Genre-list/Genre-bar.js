import React from 'react'
import Button from 'react-bootstrap/Button'

const GenreBar = props => {

    return (
        <>
            <Button onClick={() => props.handleButtonBar('action')}>Action</Button>
            <Button onClick={() => props.handleButtonBar('indie')}>Indie</Button>
            <Button onClick={() => props.handleButtonBar('shooter')}>Shooter</Button>
            <Button onClick={() => props.handleButtonBar('arcade')} >Arcade</Button>
            <Button onClick={() => props.handleButtonBar('adventure')}>Adventure</Button>
            <Button onClick={() => props.handleButtonBar('strategy')}>Strategy</Button>
            <Button onClick={() => props.handleButtonBar('simulation')}>Simulation</Button>
            <Button onClick={() => props.handleButtonBar('puzzle')}>Puzzle</Button>
            <Button onClick={() => props.handleButtonBar('platformer')}>Platformer</Button>
            <Button onClick={() => props.handleButtonBar('sports')}>Sports</Button>
            <Button onClick={() => props.handleButtonBar('massively-multiplayer')}>Multi-Player</Button>
            <Button onClick={() => props.handleButtonBar('family')}>Family</Button>
            <Button onClick={() => props.handleButtonBar('fighting')}>Fighting</Button>
            <Button onClick={() => props.handleButtonBar('board-games')}>Board Games</Button>
            <Button onClick={() => props.handleButtonBar('educational')}>Educational</Button>
            <Button onClick={() => props.handleButtonBar('role-playing-games-rpg')}>RPG</Button>
        </>

    )
}


export default GenreBar