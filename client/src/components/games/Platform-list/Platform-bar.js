import React from 'react'
import './Platform-list.css'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'

import pc from '../../assets/PC.png'
import xboxX from '../../assets/Xbox_X.png'

const PlatformBar = props => {

    return (
        <>
            <Row className="platform-bar">
                <Nav>
                    <Nav.Link onClick={() => props.handleButtonBar(4)} exact activeStyle={{ color: 'white' }} className="pc"><img src={pc} alt="pc" /> </Nav.Link>
                    <Nav.Link onClick={() => props.handleButtonBar(18)} className="ps4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PlayStation_4_-_Logo.svg/640px-PlayStation_4_-_Logo.svg.png" alt="ps4" /></Nav.Link>
                    <Nav.Link onClick={() => props.handleButtonBar(187)} className="ps5"><img src="https://www.logo.wine/a/logo/PlayStation/PlayStation-PS5-Logo.wine.svg" alt="ps5" /></Nav.Link>
                    <Nav.Link onClick={() => props.handleButtonBar(1)} className="xbox-one"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/X_Box_One_logo.svg/1024px-X_Box_One_logo.svg.png" alt="xboxone" /></Nav.Link>
                    <Nav.Link onClick={() => props.handleButtonBar(186)} className="xbox-x"><img src={xboxX} alt="xboxx" /></Nav.Link>
                    <Nav.Link onClick={() => props.handleButtonBar(7)} className="switch"><img src="http://www.poi-game.com/img/platforms-switch.png" alt="switch" /></Nav.Link>
                </Nav>
            </Row>

        </>

    )
}

export default PlatformBar