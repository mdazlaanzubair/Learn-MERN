const bcrypt = require("bcrypt");

// users database until I learn mongoDB start
const userBase = [
  {
    username: "testUser1",
    email: "test1@email.com",
    password: "hashedpassword1",
  },
  {
    username: "testUser2",
    email: "test2@email.com",
    pwd: "hashedpassword2",
  },
];

// signup function
const signup = (req, res) => {
  // getting req data
  const { username, email, password } = req.body;

  try {
    // finding user from user-base
    const user = userBase.find((user) => user.email === email);

    // if user already exist
    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }

    // hashing password
    const hashed_pwd = bcrypt.hash(password, 12);

    // creating new user object
    const new_user = {
      username: username,
      email: email,
      password: hashed_pwd,
    };

    // pushing new user to user-base
    userBase.push(new_user);

    //   sending success response back
    res.status(201).json({
      username: new_user.username,
      email: new_user.email,
      message: "New user is created successfully.",
    });
  } catch (error) {
    // sending error message
    res.status(500).json({ error: error, message: "Something went wrong." });
  }
};

// signin function
const signin = (req, res) => {
  // getting req data
  const { email, password } = req.body;

  try {
    // finding user from user-base
    const userExist = userBase.find((user) => user.email === email);

    // if user already exist
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    // matching password
    const pwd_matched = bcrypt.compare(password, userExist.password);

    // if password not matched
    if (!pwd_matched) {
      return res
        .status(400)
        .json({ message: "Email or Password are incorrect." });
    }

    // sending success response back
    res.status(201).json({
      username: userExist.username,
      email: userExist.email,
      message: "You are logged in successfully.",
    });
  } catch (error) {
    // sending error message
    res.status(500).json({ error: error, message: "Something went wrong." });
  }
};

module.exports = { userBase, signin, signup };
