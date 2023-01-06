import React from 'react'

const Style2 = () => {

    const styleTitle = {
        fontSize:"2rem",
        color:"red",
        fontWeight:"bold",
        textAlign:"center"
    }



  return (
    <div>
        <h2 style={styleTitle}>JSX LOOPS</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid, perspiciatis exercitationem ad magnam recusandae repellat debitis consequuntur possimus tempore eius quo at, modi, molestias reprehenderit id natus! Dicta, earum.
        Reiciendis itaque similique voluptas consequuntur quod aperiam obcaecati, ullam ea assumenda quis voluptatibus laboriosam error molestiae quia ratione quaerat temporibus porro labore tempore, sit ab sapiente totam, quo eum! Officia!</p>
        
        <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid, perspiciatis exercitationem ad magnam recusandae repellat debitis consequuntur possimus tempore eius quo at, modi, molestias reprehenderit id natus! Dicta, earum.
        Reiciendis itaque similique voluptas consequuntur quod aperiam obcaecati, ullam ea assumenda quis voluptatibus laboriosam error molestiae quia ratione quaerat temporibus porro labore tempore, sit ab sapiente totam, quo eum! Officia!</p>
    </div>
  )
}

export default Style2