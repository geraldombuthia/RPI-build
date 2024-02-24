import React from 'react'

const StatusContainer = ({status}) => {
    console.log(status)
    return (
        <div className="welcome">
            <h2><i className="fa-solid fa-microchip"></i> Microchip</h2>
            <div className="text">
                <p>{status.cpufreq} GHz</p>
                <p>{status.cputemp} °C</p>
            </div>
        </div>
    )
}

export default StatusContainer