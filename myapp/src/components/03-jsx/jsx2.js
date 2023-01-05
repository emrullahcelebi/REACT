import React from 'react'

const Jsx2 = () => {

    const user = {
        name:"Ali gel",
        email:"ali@gmail.com",
        occupations:"Developer",

    };




  return (
    <div>
    <div>Name: {user.name}</div>
    <div>Email: {user.email}</div>
    <div>Occupation: {user.occupations}</div>
    </div>
  )
}

export default Jsx2;