import React from 'react'

const BatteryContainer = ({battery}) => {
    console.log(battery)
  return (
    <div className="battery">
        <h2><i className="fa-solid fa-bolt" style={{fontSize: "0.8em"}}></i> Battery</h2>
        <div className="text">
          <p> {battery.voltage} V</p>
        </div>
      </div>
  )
}

export default BatteryContainer