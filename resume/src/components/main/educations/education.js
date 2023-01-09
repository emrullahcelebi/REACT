import React from 'react'

const Education = ({company, date, desc}) => {
  return (
    <div className="top-item resume-item">
    <h2>{company}</h2>
    <span>{date}</span>
    <p>{desc}</p>
</div>
  )
}

export default Education;