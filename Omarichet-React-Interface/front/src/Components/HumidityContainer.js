import React from 'react'
// import {FontawesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
const HumidityContainer = ({humidity}) => {
    console.log(humidity)
  return (
    <div className="humidity">
        <h2><i className="fa-solid fa-droplet" style ={{fontSize:"0.8em"}}></i> Humidity</h2>
        <div className="dashboard">
          <svg>
            <circle className="bg" cx="57" cy="57" r="52" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="white"
              fontSize="20px"
              fontFamily="Arial"
              dy=".3em"
            >
                {/* {humidity.dht.humidity} % */}
                {humidity && humidity.dht && humidity.dht.humidity} %
            </text>
            <circle className="meter-2" cx="57" cy="57" r="52" />
          </svg>
        </div>
      </div>
  )
}

export default HumidityContainer