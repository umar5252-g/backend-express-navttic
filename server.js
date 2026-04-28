// const express = require("express");
// const PORT = 7777;
// const app = express();
// const fs = require("fs");
// app.get("/", (req, res) => {
//   res.send("request is processed on git server");
// });

// fs.writeFileSync("text.txt", "I am learning MERN stack developet");
// setTimeout(() => {
//   fs.unlinkSync("text.txt");
// }, 3000);
// app.listen(PORT, () => {
//   console.log(`Express server is running....`);
// });

import express from "express";
import cors from "cors";
const PORT = 6166;
const app = express();
import db from "./config/database.js";

// connnet db
app.use(cors());

// connect db
db();

// get

app.get("/get-all-user", (req, res) => {
  res.status(200).json([
    {
      name: "umar Khan",
      age: 23,
      image: "/upload/image.jpg",
    },
    {
      name: "MMI",
      age: 22,
      image: "/upload/image.jpg",
    },
    {
      name: "Humam",
      age: 21,
      image: "/upload/image.jpg",
    },
  ]);
});

// post

// app.post('/create-user',(req,res)=>{});

// // put --> means to update

// app.put('/update-user/:id',(req,res)=>{});

// app.delete('/delete-user/:id',(req,res)=>{});

// // we will get specific id

// app.get('/get-specific-user/:id',(req,res)=>{});

app.listen(PORT, () => {
  console.log(`Your Server Is Running On Port:${PORT}`);
});
