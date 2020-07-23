import React, { Component } from 'react'
import ProfileService from '../../../service/ProfileService'

class Profile extends Component {
    constructor (){
        super ()
        this.state = {
            allProfile: ""
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



    render() {
        

        console.log(this.state.allProfile)

        return (
            <>
                {/* {const Profile = props => props.loggedInUser && <h1>¡Hi, {props.loggedInUser.username}!</h1>} */}

                <h1>Buenas tardes</h1>
                
                <h3>Community Favourites</h3>
                            
                {/* {this.state.allProfile.favCommunity.map(elm => {
                    
                    <p></p>elm.title
                })

                <h3>Event Favourite</h3> */}



            </>
        )
    }
}

export default Profile


















