import React, { useRef, useState } from 'react'
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
    const navigate = useNavigate();
    const ele = useRef();
    const [content,setContent] =useState('');
    const onChangeContent =(e)=>{
        //console.log(e.target.value);
        const val = e.target.value
        setContent(val);
        //console.log(content);
    }
    const handleRegister =(e)=>{
        e.preventDefault();
        var element_value = document.forms.myForm.privacy.value;
       // console.log(localStorage.getItem("id"));
       //  console.log(form_elements);
        axios.put("http://localhost:4500/users/addpost/"+localStorage.getItem("id"),{
            content:content,
            privacy:element_value,
            postDate : new Date().toISOString()
            
        }).then((response)=>{
            if (response.data.status === "success") {
                ele.current.click();    
               // alert("Post Added");
            }

        })
    }
  return (
    <div className='card mb-4'>
                <div className="card-body">
                    <a className=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" alt="..." style={{ width: "60px", height: "60px", borderRadius: "50%" }}></img></a>
                    <button className='rounded-pill ms-3 p-3 text-start post-button' style={{ width: '70%', borderRadius: "20%" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Start a Post</button>
                </div>
                                

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form name="myForm" onSubmit={handleRegister}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Post</h1>
                                    <button ref={ele} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" >
                                    <textarea style={{ height: "18rem" }} className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder='What do you want to talk about?' onChange={onChangeContent} value={content}></textarea>
                                    <span >Who can see your post?</span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="privacy" id="flexRadioDefault1" value={"public"} defaultChecked></input>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Anyone
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="privacy" id="flexRadioDefault2" value={"private"} ></input>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Connections Only
                                        </label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}
