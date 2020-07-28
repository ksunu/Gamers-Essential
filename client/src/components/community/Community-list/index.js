import React, { Component } from 'react'
import CommunityService from '../../../service/CommunityService'
import './Community-list.css'
import CommunityCard from './Community-card'
import CommunityForm from '../Community-form'

// BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class CommunityList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            community: [],
            id: ""
        }

        this.communityService = new CommunityService()

    }

    componentDidMount = () => this.updateCommunityList()

    updateCommunityList = () => {
        this.communityService
            .getAllCommunity()
            .then(response => this.setState({ community: response.data }))
            .catch(err => console.log(err))
    }

    // EDIT/CREATE COMMUNITY
    handleModal = (status, id) => {

        this.setState({ showModal: status })
        this.setState({ id: id })
    }

    handleCommunitySubmit = () => {
        this.handleModal(false)
        this.updateCommunityList()
    }

    // DELETE COMMUNITY
    handleDelete = id => {
        const arr = [...this.state.community]
        const arrFiltered = arr.filter(elm => elm._id !== id)
        this.setState({ community: arrFiltered })
        this.communityService
            .deleteCommunity(id)
            .then(response => console.log(response))
    }


    render() {
        return (
            <>
                <Container as="main" className="community-page">
                    <h1>Community</h1>
                    {this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Create new</Button>}
                    <Row classname="community-card-body">
                        {this.state.community.map(elm => <CommunityCard elm={elm} key={elm._id} handleModal={this.handleModal} handleDelete={this.handleDelete} loggedInUser={this.props.loggedInUser} />)}
                    </Row>

                </Container>

                <Modal dialogClassName="modal-window" size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body className="modal-page">
                        {!this.state.id ? <CommunityForm handleCommunitySubmit={this.handleCommunitySubmit} handleToast={this.props.handelToast} /> : null}
                        {this.state.id ? <CommunityForm handleCommunitySubmit={this.handleCommunitySubmit} handleToast={this.props.handleToast} id={this.state.id} /> : null}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default CommunityList