import React from 'react';
import Schedule from './components/Schedule/Schedule'
import FeelingsMenu from './components/FeelingsMenu/FeelingsMenu'
import mood from './images/mood.svg'
import wait from './images/wait.svg'

function Home() {
    return (
        <div className="main">
            <h1>Hey! Welcome to the Autism Scheduler App</h1>
            <h2>Click on the images below to tell us how you're feeling today.</h2> 
            <h3>Or how about updating your schedule.</h3>

            <a href = {<FeelingsMenu />}><img src={mood} alt="mood" /></a> 
            <a href = {<Schedule />}><img src={wait} alt="wait" /></a> 
        </div>
    )
}


export default Home;