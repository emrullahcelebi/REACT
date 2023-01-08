import React from 'react'
import About from './about/about'
import Experiences from './experiences/experiences'
import "./main.css"

const Main = () => {
  return (
    <div className="main-content pull-right">
       <About/>
       <Experiences/>
    </div>
  )
}

export default Main