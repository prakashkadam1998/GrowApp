import React from 'react'
import ProfileDropDown from './ProfileDropDown'

export default function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LookedIn</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">My Network</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Messaging</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Notifications</a>
          </li>
          
          <li class="nav-item">
            <ProfileDropDown></ProfileDropDown>
          </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
