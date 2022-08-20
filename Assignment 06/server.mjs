import express from "express";
import { signup, signin } from "./controller/authenticator.mjs";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;;

// register route
app.post("/register", signup);

// login route
app.post("/login", signin);

app.listen(port, () => {
  console.log(`Authenticator API is lurking on port no. ${port}`);
});
