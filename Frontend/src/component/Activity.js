import React, { useEffect, useRef, useState } from 'react'
import Profile from './Profile'
import Axios from 'axios';
import * as bootstrap from 'bootstrap';



export default function Activity() {
  // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [content,setContent] =useState('');

  //Set existing content in textbox before editing
  const setpostcontent =()=>{
    setContent(posts.find(o => o._id === postId).content);
  }
  //when user enter edits content set it
  const onChangeContent =(e)=>{
    const val = e.target.value
    setContent(val);
  console.log(content);
}

// on user click (upadate) button send data to backend for update
const handleUpdatePost = () => {
  Axios.put("http://localhost:4500/users/posts/" + localStorage.getItem("id") + "/" + postId,
  {content:content})
  .then((response) => {
    // set upadated content to re-render with upadated data
    setPosts(response.data.data.posts);
  })

  console.log(postId);
}

// delete particular post by it's id
  const handleDeletePost = () => {
    Axios.delete("http://localhost:4500/users/posts/" + localStorage.getItem("id") + "/" + postId).then((response) => {
      // console.log(response.data.data);
      setPosts(response.data.data.posts);
    })

    console.log(postId);
  }

  const setpostid = (e) => {
    // console.log(e.target.value);
    setPostId(e.target.value);
  }

  useEffect(() => {
    Axios.get("http://localhost:4500/users/posts/" + localStorage.getItem("id"))
      .then((response) => {
        console.log(response.data.data.posts);
        setPosts(response.data.data.posts);
      })
  }, []);
  return (
    <div>
      <div class="container text-center">
        <div class="row align-items-start">
          <Profile></Profile>
          <div class="col-sm-6">
            {posts.map(obj =>

              <div class="card my-4" style={{ width: "auto" }}>

                <div class="card-body d-flex justify-content-start">
                  <div className=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" class="" alt="..." style={{ width: "60px", height: "60px", borderRadius: "50%" }}></img></div>
                  <div className='d-flex flex-column p-2'>
                    <div className='text-start'>{localStorage.getItem("name")}</div>
                    <div className='text-start'>Vice President (HR & Talent Acquisition)</div>
                  </div>
                  {/* <button type="button" class="position-absolute top-2 end-0 fs-4" data-bs-trigger="focus" data-bs-container="body" data-bs-title="Dismissible popover" data-html="true" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Link:<a href=''>wee</a>" style={{ width: "40px", height: "40px", background: "none", border: "none", borderRadius: "50%" }}>&#10247;</button> */}

                  <div class="btn-group dropstart position-absolute top-2 end-0">
                    <button onClick={setpostid} value={obj._id} type="button" class="fs-4 " data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "40px", height: "40px", background: "none", border: "none", borderRadius: "50%" }} >
                      &#10247;
                    </button>
                    <ul class="dropdown-menu">
                      <li><button onClick={setpostcontent} class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal-edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg> Edit Post</button></li>

                      <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg> Delete Post</button></li>
                      <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg> Who Can See This?</a>
                      </li>
                    </ul>
                  </div>

                </div>
                <div class="d-flex justify-content-around card-body">{obj.content}</div>

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
          <div class="col">
            One of three columns
          </div>

        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header d-flex flex-column">
                <h1 class="text-center modal-title fs-5 py-4" id="exampleModalLabel">Delete Post ?</h1>
                <div>Are you sure you want to permenently remove this post ?</div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal" onClick={handleDeletePost}>Delete</button>
              </div>
            </div>
          </div>
        </div>


        <div class="modal fade" id="exampleModal-edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Post</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <textarea style={{ height: "18rem" }} className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder='What do you want to talk about?' onChange={onChangeContent} value={content}></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal" onClick={handleUpdatePost}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
