import React from 'react'
import Status from './StatusContainer'
import Humidity from './HumidityContainer'
import Accel from './AccelContainer'
import Battery from './BatteryContainer'
import Gyro from './GyroContainer'
import Temp from './TempContainer'

const Container = ({sensors}) => {
    console.log(sensors.voltage)
  return (
       <div className="container">
        <Status status={sensors}/>
        <Humidity humidity = {sensors}/>
        <Battery battery={sensors}/>
        <Temp temp = {sensors}/>
        <Accel accel = {sensors}/>
        <Gyro gyro = {sensors}/>
    </div>
   
  )
}

export default Container