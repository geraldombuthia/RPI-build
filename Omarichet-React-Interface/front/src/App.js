import "./App.css"
import React, { useState, useEffect } from "react";
import SensorTab from "./Components/SensorTab"



function App() {
  const [sensors, setSensors] = useState("");
  const dummySensorData = {
    sensors: {
      voltage: "3.0",
      cpufreq: "1.40",
      cputemp: "51.5",
      mpu: {
        Gx: "-0.10",
        Gy: "-0.31",
        Gz: "0.14",
        Ax: "0.00",
        Ay: "0.01",
        Az: "1.00",
      },
      dht: {
        humidity: 53,
        temperature: 30,
      },
    },
  };

  const { sensors1 } = dummySensorData;
  useEffect(() => {
    const getData = async () => {
      const sensorsFromServer = await fetchSensors();
      setSensors(sensorsFromServer);
    };
    getData();
  }, []);

  const fetchSensors = async () => {
    const res = await fetch("http://192.168.8.198:8080/sensors")
    const data = await res.json();
    return data;
  }
  return (
    <>
    {sensors && <SensorTab sensors = {sensors1}/>}
    </>
    
  );
}

export default App;
