import React from 'react'

const GyroContainer = ({gyro}) => {
    console.log(gyro)
    return (
        <div className="gyro">
            <h2><i className="fa-solid fa-compass"></i> Gyro</h2>
            <div className="text accelText">
                <p>x: <span>{gyro && gyro.mpu && gyro.mpu.Gx}</span> °/s</p>
                <p>y: <span>{gyro && gyro.mpu && gyro.mpu.Gy}</span> °/s</p>
                <p>z: <span>{gyro && gyro.mpu && gyro.mpu.Gz}</span> °/s</p>
            </div>
        </div>
    )
}

export default GyroContainer

