const Todo = require("../models/todo.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published
  });

  // Save Customer in the database
  Todo.create(todo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};
