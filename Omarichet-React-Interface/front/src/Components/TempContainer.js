import React from 'react'
const TempContainer = ({temp}) => {
  console.log(temp);
  let val = Math.round((temp.dht.temperature)*(360)/(100))
  console.log(val)

  return (
    <div className="temp">
        <h2><i className="fa-solid fa-temperature-three-quarters"></i> Temperature</h2>
        <div className="dashboard">
          <svg>
            <circle className="bg" cx="57" cy="57" r="52" strokeDashoffset={100}/>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="white"
              fontSize="20px"
              fontFamily="Arial"
              dy=".3em"
            >
               {temp && temp.dht && temp.dht.temperature}°C
            </text>
            <circle className="meter-1" cx="57" cy="57" r="52" strokeDashoffset= {val}/>
          </svg>
        </div>
      </div>
  )
}

export default TempContainer