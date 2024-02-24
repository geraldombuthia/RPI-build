import React from 'react'

const AccelContainer = ({accel}) => {
    console.log(accel)
    return (
        <div className="accel">
            <h2> <i className="fa-solid fa-gauge-high" style={{fontSize: "0.8em"}}></i> Acceleration</h2>
            <div className="text accelText">
                <p>x: <span>{accel && accel.mpu && accel.mpu.Ax}</span> G</p>
                <p>y: <span>{accel && accel.mpu && accel.mpu.Ay}</span> G</p>
                <p>z: <span>{accel && accel.mpu && accel.mpu.Az}</span> G</p>
            </div>
        </div>
    )
}

export default AccelContainer

