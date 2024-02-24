import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
const SensorTab = ({sensors}) => {
  console.log(sensors)
  return (
    <div className="wrapper">
      <Navbar />
      <Container sensors={sensors}/>
    </div>
  );
};

export default SensorTab;
