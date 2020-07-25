import React from 'react'
import Button from 'react-bootstrap/Button'

const PlatformBar = props => {

    return (
        <>
            <Button onClick={() => props.handleButtonBar(4)}>PC</Button>
            <Button onClick={() => props.handleButtonBar(18)}>PS4</Button>
            <Button onClick={() => props.handleButtonBar(187)}>PS5</Button>
            <Button onClick={() => props.handleButtonBar(1)} >XBOX ONE</Button>
            <Button onClick={() => props.handleButtonBar(186)}>XBOX X</Button>
            <Button onClick={() => props.handleButtonBar(7)}>SWITCH</Button>

        </>

    )
}


export default PlatformBar