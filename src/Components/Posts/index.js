import React, { Component } from 'react'
import axios from 'axios'
import './styled.css'

export default class Posts extends Component {
    state = {
        post: {},
        id: 0
    }

    getPosts = () => {
        const ide = this.state.id + 1
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ide}`)
            .then(res => {
                this.setState({
                    post: res.data,
                    id: ide
                })
            })
    }

    componentDidMount() {
        this.getPosts()

    }

    render() {
        return (
            <>
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <button onClick={this.getPosts}>Next</button>
            </>
        )
    }
}