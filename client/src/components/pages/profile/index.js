import React, { Component } from 'react'
import ProfileService from '../../../service/ProfileService'
import CommunityCard from './Community-card'
import EventCard from './Event-card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
    
    
class Profile extends Component {
    constructor (){
        super ()
        this.state = {
            allProfile: undefined
        }

        this.ProfileService = new ProfileService

    }

    componentDidMount = () => this.updateCommunityList()

    updateCommunityList = () => {
        this.ProfileService
            .getAllProfile()
            .then(response => this.setState({ allProfile: response.data }))
            .catch(err => console.log(err))
    }

    // {/* {const Profile = props => props.loggedInUser && <h1>¡Hi, {props.loggedInUser.username}!</h1>} */}


    render() {
        

        console.log(this.state.allProfile)

        return (
            <>
                <h1>Your profile</h1>
            

                <Container>
                    <h2>Favourite Community</h2>
                    <Row>
                    {this.state.allProfile && this.state.allProfile.favCommunity.map(elm => <CommunityCard {...elm} />)}
                    </Row>
                
                    <h2>Favourite Events</h2>
                    <Row>
                    {this.state.allProfile && this.state.allProfile.favEvent.map(elm => <EventCard {...elm} />)}
                    </Row>
                </Container>
                    
            </>
        )
    }
}

export default Profile
