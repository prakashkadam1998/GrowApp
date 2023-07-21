import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileDropDown() {
    return (

        <div>
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" class="" alt="..." style={{ height: "20px", borderRadius: "50%", alignItems: "center" }}></img> View
                </button>
                <ul class="dropdown-menu ">
                    <div class="card" style={{ width: "18rem", border: "none" }}>
                        <div className='row'>
                            <div className='center col-sm-3'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" class="m-2" alt="..." style={{ height: "60px", borderRadius: "50%", alignItems: "center" }}></img></div>
                            <div class="card-body col-sm-9">
                                <h5 class="card-title text-start">{localStorage.getItem("name")}</h5>
                                <p class="card-text">364K Followers | Product Leader | Public Speaker (578 Keynotes) | Unstop's Top 10 Unstoppable Education & Career Influencers | GSS Mega Creator of the Year (Personal Branding) | Management Consultant | ISB | NUS | SRCC</p>
                            </div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">

                                <Link to='/home/profile'> <button className='rounded-pill text-primary' style={{ width: "100%", borderColor: "blueviolet", border: "solid blue 1px" }}>View Profile</button></Link>
                            </li>
                            <li class="list-group-item">
                                <h5>Account</h5>
                                <a href=''>Settings</a>
                            </li>
                            <li class="list-group-item">
                                <h5>Manage</h5>
                                <Link to='/home/recent-activity'>Posts</Link>
                            </li>
                            <li class="list-group-item"><a  href='/'>Sign Out</a></li>
                        </ul>
                    </div></ul>
            </div>
        </div>

    )
}
