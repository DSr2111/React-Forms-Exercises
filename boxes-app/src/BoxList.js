import React, { useState } from "react";
import Box from "./Box";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const add = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id != id));
  };

  const boxComponents = boxes.map((box) => <Box />);

  return (
    <div>
      <NewBoxForm />
    </div>
  );
}
