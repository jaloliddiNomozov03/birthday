import React, { useState } from "react";
import FromPost from "./FromPost";
import TableList from "./TableList";
import {withRouter} from "react-router-dom";

const Basic = () => {
    const [select, setSelect] = useState('');
    console.log("By select", {select})
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', stack: 'Full-stack' },
        { id: 2, title: 'Python', stack: 'MERN-Stack' },
        { id: 3, title: 'C#', stack: 'Back End' },
        { id: 4, title: 'C++', stack: 'Front End' },
    ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const onDelete = (post) => {
        setPosts(posts.filter(value => value.id !== post.id));
    }
    return (
        <div className=" p-3 w-400  " >
            <FromPost createPost={createPost} />
            <div className="mt-2 flex-row-reverse d-flex ">
                <select
                 onChange={e=>setSelect(e.target.value)}
                 className="form-select w-50 form-select form-select-sm"
                 >
                    <option value="value Title">  Sorted by Title</option>
                    <option value="value Stack">   Sorted by Steck </option>
                </select>
            </div>
            {posts.length
                ? <div>
                    <h5 className="text-center mt-3 " >Favourite Programming Language</h5>
                    <TableList posts={posts} onDelete={onDelete} />
                </div>
                : <h5 className="text-center mt-3" >Ma'lumotlar kiriting</h5>
            }
        </div >
    )
}
export default withRouter(Basic);