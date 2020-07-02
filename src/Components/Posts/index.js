import React, { Component } from 'react'
import axios from 'axios'

export default class Posts extends Component {
    state = {
        post: [],
        id: 1,
    }

    getPosts = () => {
        const ide = this.state.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ide}`)
            .then(res => {
                this.setState({
                    post: res.data,
                })
            })
    }

    componentDidMount = () => {
        this.getPosts()
    }

    handleClick = () => {
        this.setState({
            id: this.state.id + 1
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.post.title}</h1>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}