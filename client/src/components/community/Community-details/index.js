import React, { Component } from 'react'

import CommunityService from '../../../service/CommunityService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class CommunityDetails extends Component {
    constructor() {
        super()
        this.state = {
            communityDetails: ""
        }
        this.communityService = new CommunityService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.id
        this.communityService
            .getOneCommunity(id)
            .then(response => this.setState({ communityDetails: response.data }))
            .catch(err => console.log(err))


    }

    render() {

        return (
            <>
                <Container as="main">

                    <h1>{this.state.communityDetails.title}</h1>

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            
                            <p><b>Description:</b> {this.state.communityDetails.description}</p>
                            <hr></hr>
                            <p><b>Genre:</b> {this.state.communityDetails.genre}</p>
                            <hr></hr>
                            {/* TO-DO <p><b>Usuario:</b> {this.state.communityDetails.owner.username}</p> */}
                            <hr></hr>
                            {/* <p><b>Comments:</b> {this.state.communityDetails.comments.map(elm => {
                             <>
                               <p>{elm.title}</p>
                               <p>{elm.description}</p>
                               <p>{elm.rating}</p>
                            </>
                            })}</p> */}
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/community'>Back</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.communityDetails.imageProd} alt={this.state.communityDetails.title} />
                        </Col>
                    </Row>

                </Container>
            </>
        )
    }
}

export default CommunityDetails