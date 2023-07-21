import React from 'react';
import News from './News';
import Profile from './Profile';
import Feed from './Feed';

export default function Main() {
    return (
        <div className='row'>
            <Profile></Profile>
            <Feed></Feed>   
            <News></News>
        </div>
    )
}
