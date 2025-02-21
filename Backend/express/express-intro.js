// const express = require('express');
import express from "express";
const app = express();
app.get("/api", (req, res) => {
  try {
    const { name, rollno } = req.query;
    if (!name) {
      res.status(404).send("name dena hai");
    } else {
      res.send(`my name is ${name} and rollno. is ${rollno}`);
    }
    res.send(`my name is ${name} and roll no. is ${rollno}`);
  } catch (error) {
    console.log("error is:" + error.message);
  }
});

app.get("/api/:name/:rollno", (req, res) => {
  const { name, rollno } = req.params;
  res.send(`my name is ${name} and rollno. is ${rollno}`);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
