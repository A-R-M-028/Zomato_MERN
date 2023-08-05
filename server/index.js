//  env variable
// require ('dotenv').config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

// Database connection
// import ConnectDB from "/database/connection";

const zomato = express(); // Initialized

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req, res) => {
  res.json({ message: "Setup Successfull!" });
});

zomato.listen(4000, () => {
  console.log("Server is up and running");
});
