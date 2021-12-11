import React, { useState } from 'react'

const FromPost = ({ createPost }) => {
    const [post, setPost] = useState({ title: '', stack: '' });
    const onAdd = (e) => {
        if (post.title.length !== 0 && post.stack.length !== 0) {
            const newPost = {
                ...post,
                id: Date.now()
            }
            createPost(newPost);
            setPost({ title: '', stack: '' });
        }
    }
    return (
        <div className="input-group-sm  " >
            <h4 className=" text-center" >Create programming language</h4>
            <input
                type="text"
                value={post.title}
                className="form-control"
                placeholder="Programming Language"
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <input
                type="text"
                value={post.stack}
                placeholder="Stack"
                className="form-control mt-2"
                onChange={e => setPost({ ...post, stack: e.target.value })}
            />
            <button
                className="btn btn-primary w-100 mt-2 btn-sm "
                onClick={onAdd}
            >Create</button>
        </div>
    )
}
export default FromPost;