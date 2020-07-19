import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import CommunityList from './community/Community-list'
import CommunityDetail from './community/Community-details'
import IndexPage from './pages/index'

// BOOTSTRAP Component
import Navigation from './ui/Navbar'



class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <IndexPage />} />
          <Route exact path="/community" render={() => <CommunityList />} />
          <Route path="/community/:id" render={props => <CommunityDetail {...props} />} />

        </Switch>
      </>
    )
  }
}

export default App