import React, { Component } from 'react'
import GameList from './Game-list'
import GenreList from './Genre-list'

class Games extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <>
                <GameList />
                <GenreList />

            </>
        )
    }
}

export default Games