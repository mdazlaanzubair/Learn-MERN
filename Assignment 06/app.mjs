import express from "express";
import cors from "cors";
import {
  index,
  create,
  view,
  update,
  remove,
} from "./controller/blogControllers.mjs";

//  initializing Express App
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// listing to the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening for events on port ${port}`);
});

// index route
app.get("/blogs", (req, res) => {
  index(req, res);
});

// single blog route
app.get("/blog/:blogId", (req, res) => {
  view(req, res);
});

// add new blog route
app.post("/blog/create", (req, res) => {
  create(req, res);
});

// update blog route
app.put("/blog/update/:blogId", (req, res) => {
  update(req, res);
});

// delete blog route
app.delete("/blog/delete/:blogId", (req, res) => {
  remove(req, res);
});
