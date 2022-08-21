// controllers to perform operations in blogs collection

// importing Model and database connection
import Blog from "../models/blog.mjs";
import connect_to_db from "../database/db_config.mjs";

// connecting to the database Blogs collection
connect_to_db("MongoLog-Blogs");

// list all the blogs from the database
const index = async (req, res) => {
  // empty .find() method brings all the blogs from the database

  try {
    const blogs_list = await Blog.find();

    if (blogs_list.length === 0) {
      res.status(404).send({
        message: "There is nothing to fetch from database.",
      });

      return;
    } else {
      // filtering blogs that are deleted or not published
      const filtered_blogs = blogs_list.filter((blog) => {
        if (blog.isDeleted === false && blog.isPublished === true) {
          return blog;
        }
      });

      res.status(200).send({
        data: filtered_blogs,
        message:
          "List of blog posts is successfully fetched from the database.",
      });

      return;
    }
  } catch (err) {
    res.status(500).send({
      message: "An error encountered while connecting to the database.",
      errors: err,
    });

    return;
  }
};

// add new blog to the database
const create = async (req, res) => {
  // setting form data from req.body object
  const form_data = req.body;

  // validation middleware for form_data
  if (!form_data) {
    res.status(400).send({ message: "Kindly fill the form properly." });
    return;
  }

  if (!form_data.title) {
    res.status(400).send({ message: "Blog post must have a title." });
    return;
  }

  if (!form_data.body) {
    res.status(400).send({ message: "Blog post is nothing without body." });
    return;
  }

  // creating new blog instance
  const blog = new Blog({
    title: form_data.title,
    author: form_data.userId,
    snippet: form_data.body.slice(0, 250).concat(` [...]`),
    body: form_data.body,
  });

  try {
    const new_blog = await blog.save();

    res.status(201).send({
      data: new_blog,
      message: "Blog post has been created successfully.",
    });
    return;
  } catch (err) {
    res.status(400).send({
      errors: err,
      message: "Failed to save blog post in the database.",
    });
    return;
  }
};

// view single blog post from the database
const view = async (req, res) => {
  // setting value of form data from req.body object
  const blog_id = req.params.blogId;

  // passing blog id in .findById() method to fetch specific post from the database
  try {
    const blog = await Blog.findById(blog_id);

    // checking if the requested blog is deleted or published
    if (blog.isDeleted === false && blog.isPublished === true) {
      res.status(200).send({
        data: blog,
        message: "Blog post has been successfully fetched from the database.",
      });

      return;
    } else {
      res.status(404).send({
        message: "The blog post you requested is not published or deleted.",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "The blog post you requested is not listed in the database.",
      error: err,
    });

    return;
  }
};

// edit single blog post from the database
const update = async (req, res) => {
  // setting form data from req.body object
  const form_data = req.body;

  // setting value of form data from req.body object
  const _id = req.params.blogId;

  // passing blog id in .findByIdAndUpdate() method to fetch specific post from the database and update
  try {
    const blog = await Blog.findByIdAndUpdate(
      { _id },
      {
        $set: {
          title: form_data.title,
          snippet: form_data.body.slice(0, 250).concat(` [...]`),
          body: form_data.body,
          isPublished: form_data.isPublished,
        },
      }
    );

    res.status(200).send({
      message: "Blog post is successfully updated.",
    });

    return;
  } catch (error) {
    res.status(404).send({
      message: "The blog post you requested is not listed in the database.",
      error: err,
    });
    return;
  }
};

// delete single blog post from the database
const remove = async (req, res) => {
  // setting value of form data from req.body object
  const _id = req.params.blogId;

  // passing blog id in .findByIdAndUpdate() method to fetch specific post from the database and update
  try {
    await Blog.findByIdAndUpdate(
      { _id },
      {
        $set: {
          isDeleted: true,
        },
      }
    );

    res.status(200).send({
      message: "Blog post is successfully deleted.",
    });

    return;
  } catch (error) {
    res.status(404).send({
      message: "The blog post you requested is not listed in the database.",
      error: err,
    });
    return;
  }
};

export { index, create, view, update, remove };
