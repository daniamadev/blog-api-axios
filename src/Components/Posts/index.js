import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styled.css'

const Posts = () => {
    const [id, setId] = useState(0)
    const [post, setPost] = useState({})

    const getPosts = async () => {
        const ide = id + 1
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${ide}`)
            .then(res => {
                const { title, body } = res.data
                setPost({
                    title,
                    body
                })
                setId(ide)
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => getPosts()}>Next</button>
        </>
    )
}

export default Posts