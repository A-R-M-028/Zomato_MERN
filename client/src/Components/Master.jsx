import React from "react";
import { useParams } from "react-router-dom"; //This is react hook

const Master = () => {
  const { type } = useParams(); // Invoke useParams as a function
  console.log("Clicked");
  return <>{type}</>;
};

export default Master;

// master_url: type

// delivery, dining, nght life -> type
