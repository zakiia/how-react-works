import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "2px solid purple", margin: "20px" }}>
      <h2>This is my Smart watch</h2>
      <h3>My Current Step: {steps}</h3>
      <button onClick={increaseSteps}>De Dour.....</button>
      <Display name="Rolex" steps={steps}></Display>
    </div>
  );
};

export default Watch;
