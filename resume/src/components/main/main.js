import React from 'react'
import About from './about/about'
import Contact from './contact/contact'
import Educations from './educations/educations'
import Experiences from './experiences/experiences'
import "./main.css"
import Testimonials from './testimonials/testimonials'

const Main = () => {
  return (
    <div className="main-content pull-right">
       <About/>
       <Experiences/>
       <Educations/>
       <Testimonials/>
       <Contact/>
    </div>
  )
}

export default Main