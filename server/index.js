//  env variable
require("dotenv").config();
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Order";
import Review from "./API/Review";

// Config
import routeConfig from "./config/routeConfig";
import passport from "passport";

// import passport from "passport";
// import passport from "passport";
// import googleAuthConfig from "./config/googleAuthConfig";
// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const zomato = express(); // Initialized

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

// Route config
routeConfig(passport); // Pass the passport instance to the routeConfig function
zomato.use(passport.initialize()); // Initialize passport middleware
// zomato.use(passport.initialize());
// zomato.use(passport.session());
// Passort Configuration
// googleAuthConfig(passport);

// For application routes
// localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/restaurant", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);

zomato.get("/", (req, res) => {
  res.json({ message: "Setup Successfull!" });
});

zomato.listen(4000, () => {
  console.log("Server is up and running");
});
