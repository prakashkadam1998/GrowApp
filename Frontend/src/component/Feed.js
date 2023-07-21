import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddPost from './AddPost';

export default function Feed() {

    const ele = useRef();
    const [posts, setPosts] = useState([]);
     
    // Retrive latest posts except logged in user for content feed on main page
    useEffect(() => {
        Axios.get("http://localhost:4500/users/latestposts/" + localStorage.getItem("id"))
            .then((response) => {
                console.log(response.data.data);
                setPosts(response.data.data);
            })
    }, []);
    return (
        <div className='col-xl-6 p-4'>
            <AddPost></AddPost>
            <div>
                {posts.map(obj =>

                    <div class="card my-4" style={{ width: "auto" }}>

                        <div class="card-body d-flex justify-content-start">
                            <div className=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" class="" alt="..." style={{ width: "60px", height: "60px", borderRadius: "50%" }}></img></div>
                            <div className='d-flex flex-column p-2'>
                                <div className='text-start'>{obj.completeName}</div>
                                <div className='text-start'>{obj.about}</div>
                            </div>
                            {/* <button type="button" class="position-absolute top-2 end-0 fs-4" data-bs-trigger="focus" data-bs-container="body" data-bs-title="Dismissible popover" data-html="true" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Link:<a href=''>wee</a>" style={{ width: "40px", height: "40px", background: "none", border: "none", borderRadius: "50%" }}>&#10247;</button> */}

                            <div class="btn-group dropstart position-absolute top-2 end-0">
                                <button value={obj._id} type="button" class="fs-4 " data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "40px", height: "40px", background: "none", border: "none", borderRadius: "50%" }} >
                                    &#10247;
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal-edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                    </svg> Save</button></li>

                                    <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg> Copy link to post</button></li>
                                    <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16">
                                        <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                                    </svg> Report post</button></li>
                                </ul>
                            </div>

                        </div>
                        <div class="d-flex justify-content-around card-body">{obj.posts.content}</div>

                        <hr></hr>
                        <div class="d-flex justify-content-around card-body">
                            <span className=''>Like</span>
                            <span className=''>Comment</span>
                            <span className=''>share</span>
                            <span className=''>Send</span>
                        </div>
                    </div>
                )}
            </div>

        </div>)
}

