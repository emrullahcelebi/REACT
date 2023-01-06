import React from 'react'

const Jsx5 = () => {

    const names=["Ali","Veli","Deli","Seli"];
    const cities= ["Istanbul","Izmir","London","Paris"];

  return (
    <div>
        <ul>
            {names.map((name,index)=><li key={index}>{name}</li>)}
            
        </ul>

        <select name="" id="">
            {cities.map((city,i)=><option key={i}>{city}</option>)}
            
            <option value="">Istanbul</option>
        </select>


    </div>
  )
}

export default Jsx5;