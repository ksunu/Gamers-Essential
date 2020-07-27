import React from 'react'
import './Platform-list.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

const PlatformBar = props => {

    return (
        <>
            <div className="platform-bar">
                <Row>
                    <Button onClick={() => props.handleButtonBar(4)} className="pc"><img src="https://www.betaarchive.com/wiki/images/9/94/Pc-logo-png.png" alt="" /> </Button>
                    <Button onClick={() => props.handleButtonBar(18)} className="ps4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PlayStation_4_-_Logo.svg/640px-PlayStation_4_-_Logo.svg.png" alt="" /></Button>
                    <Button onClick={() => props.handleButtonBar(187)} className="ps5"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png" alt="" /></Button>
                    <Button onClick={() => props.handleButtonBar(1)} className="xbox-one"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/X_Box_One_logo.svg/1024px-X_Box_One_logo.svg.png" alt="" /></Button>
                    <Button onClick={() => props.handleButtonBar(186)} className="xbox-x"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Xbox_Series_X_Logo.svg.png/250px-Xbox_Series_X_Logo.svg.png" alt="" /></Button>
                    <Button onClick={() => props.handleButtonBar(7)} className="switch"><img src="https://lh3.googleusercontent.com/proxy/QskJ6C58OOe-DkgrKVF1K-RJ4B3sL3vJpjRia2iqY6jv2V-m_h-WM2k6LJol-B8vUy_2yek4et4uiSjR8kDg6VQzaJaoQQj0bP7-7kxsruo1pj5f4fXFGei-VQ" alt="" /></Button>
                </Row>

            </div>

        </>

    )
}

export default PlatformBar