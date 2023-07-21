
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FullProfile() {


  return (
    <div class="container text-center">
      <div className='row'>
        <div className='col-sm-8 p-4 '>
          <div class="card mb-3" style={{ width: "auto" }}>
            <div className='center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW37bG6wDxstE5ZONX8ICjPcJtFLjWbKKzA_eeTiWE_Q&s" class="" alt="..." style={{ borderRadius: "50%" }}></img></div>
            <div class="card-body">
              <h5 class="card-title text-center">{localStorage.getItem("name")}</h5>
              <p class="card-text">364K Followers | Product Leader | Public Speaker (578 Keynotes) | Unstop's Top 10 Unstoppable Education & Career Influencers | GSS Mega Creator of the Year (Personal Branding) | Management Consultant | ISB | NUS | SRCC</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Open to work
                Software Developer, Back End Developer, Frontend Web Developer</li>
            </ul>
            <div class="card-body">

              <Link to='/home/recent-activity'>See Your Posts</Link>
            </div>
          </div>

          <div class="card" style={{ width: "auto" }}>
            <div class="card-body ">
              <h5 class="card-title">Activity</h5>
              <a href="#" class="">240 followers</a>
            </div>
            <div class="card-footer text-body-secondary">
              <Link to='/home/recent-activity'>See All Activity</Link>
            </div>
          </div>
        </div>

        <div className='col-sm-4 p-4'>
          <div class="card" style={{ width: "auto" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Profile language
                English</li>
              <li class="list-group-item">Public profile & URL</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
