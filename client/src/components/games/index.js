import React, { Component } from 'react'
import GameList from './Game-list'

class Games extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <>
                <GameList />
            </>
        )
    }
}

export default Games