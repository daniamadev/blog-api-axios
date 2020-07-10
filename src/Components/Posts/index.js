import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styled.css'

const Posts = () => {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({
        title: "",
        body: "",
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                const { title, body } = res.data
                setPost({
                    title,
                    body
                })
            })
    }, [id])

    const incrementID = () => {
        setId(id => id + 1)
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