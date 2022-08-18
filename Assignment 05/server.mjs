import express from "express";
import * as auth from "./controller/authenticator.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;;

// register route
app.post("/register", auth.signup);

// login route
app.post("/login", auth.signin);

app.listen(port, () => {
  console.log(`Authenticator API is lurking on port no. ${port}`);
});
