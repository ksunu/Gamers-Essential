import React from 'react'
import './index.css'

import Toast from 'react-bootstrap/Toast'

const CustomToast = ({ visible, text, handleToast }) => {
    return (
        <Toast style={{ position: 'fixed', right: '50px', bottom: '50px', width: '300px' }} show={visible} onClose={() => handleToast(false)} delay={3000} autohide>
            <Toast.Header className="header-toast"> <strong className="mr-auto">Gamers Essential</strong> </Toast.Header>
            <Toast.Body className="body-toast">{text}</Toast.Body>
        </Toast>
    )
}

export default CustomToast