import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styled.css'

const Posts = () => {
    const [id, setId] = useState(0)
    const [post, setPost] = useState({
        title: "",
        id: 0,
    })

    useEffect(() => {
        const ide = id + 1
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ide}`)
            .then(res => {
                const { title, body } = res.data
                setPost({
                    title,
                    body
                })
            })
    }, [])

    const incrementID = () => {
        setId(id + 1)
    }



    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => incrementID()}>Next</button>
        </div>
    )
}

export default Posts