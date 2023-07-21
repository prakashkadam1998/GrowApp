import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div className='col-xl-3 p-4'>
            <div class="card" style={{ width: "auto" }}>
                <div className='center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" class="" alt="..."  style={{borderRadius:"50%",alignItems:"center"}}></img></div>
                <div class="card-body">
                   <Link to='/home/profile'><h5 class="card-title text-center">{localStorage.getItem("name")}</h5></Link>
                    <p class="card-text">364K Followers | Product Leader | Public Speaker (578 Keynotes) | Unstop's Top 10 Unstoppable Education & Career Influencers | GSS Mega Creator of the Year (Personal Branding) | Management Consultant | ISB | NUS | SRCC</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a>Who's viewed your profile</a>
                    </li>
                    <li class="list-group-item">Connections</li>
                    <li class="list-group-item">My Items</li>
                </ul>
                
            </div>
        </div>
    )
}
