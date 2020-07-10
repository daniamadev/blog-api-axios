import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styled.css'

const Posts = () => {
    const [id, setId] = useState(1)
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({
        title: "",
        body: "",
    })

    const getPosts = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                const { title, body } = res.data
                setPost({
                    title,
                    body
                })
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        getPosts()
    }, [id])


    const incrementID = () => {
        setId(prevID => prevID + 1)
    }

    const decrementID = () => {
        if (id <= 1) {
            setLoading(false)
        } else {
            setId(id => id - 1)
        }
    }

    return (
        <>
            {loading ? (<div className="loading"></div>)
                : (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button onClick={() => decrementID()}>Back</button>
                        <button disabled={loading} onClick={() => incrementID()}>Next</button>
                    </div>
                )}
        </>

    )
}

export default Posts