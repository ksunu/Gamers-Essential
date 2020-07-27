import React from 'react'
import './Platform-list.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

const PlatformBar = props => {

    return (
        <>
 
                <Row className="platform-bar">
                <Button onClick={() => props.handleButtonBar(4)} className="pc"><img src="https://www.betaarchive.com/wiki/images/9/94/Pc-logo-png.png" alt="" /> </Button>
                <Button onClick={() => props.handleButtonBar(18)} className="ps4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PlayStation_4_-_Logo.svg/640px-PlayStation_4_-_Logo.svg.png" alt="" /></Button>
                <Button onClick={() => props.handleButtonBar(187)} className="ps5"><img src="https://www.logo.wine/a/logo/PlayStation/PlayStation-PS5-Logo.wine.svg" alt="" /></Button>
                <Button onClick={() => props.handleButtonBar(1)} className="xbox-one"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/X_Box_One_logo.svg/1024px-X_Box_One_logo.svg.png" alt="" /></Button>
                <Button onClick={() => props.handleButtonBar(186)} className="xbox-x"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Xbox_Series_X_Logo.svg.png/250px-Xbox_Series_X_Logo.svg.png" alt="" /></Button>
                <Button onClick={() => props.handleButtonBar(7)} className="switch"><img src="http://www.poi-game.com/img/platforms-switch.png" alt="" /></Button>
                </Row>

        </>

    )
}

export default PlatformBar