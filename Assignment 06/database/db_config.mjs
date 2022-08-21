// file to store database connection related stuff
import mongoose from "mongoose";

// db config
const db_user = {
  name: "MongoLog-Admin",
  pass: "MongoLog-Admin123",
};

// connecting to the database
const connect_to_db = (db_table) => {
  // db URL
  const db_connection_URL = `mongodb+srv://${db_user.name}:${db_user.pass}@blogprojectcluster.xpetk4b.mongodb.net/${db_table}?retryWrites=true&w=majority`;

  // connecting to the database
  mongoose
    .connect(db_connection_URL)
    .then(() => {
      console.log("Database Connected.")
      return true;
    })
    .catch((err) => {
      console.log("Error while connecting to the database.");
      return false;
    });
};

export default connect_to_db