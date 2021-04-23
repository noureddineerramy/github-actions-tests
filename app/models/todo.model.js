const sql = require("./db.js");

// constructor
const Todo = function(todo) {
  this.title = todo.title;
  this.description = todo.description;
  this.published = todo.published;
};

Todo.create = (newTodo, result) => {
  sql.query("INSERT INTO todos SET ?", newTodo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newTodo });
    result(null, { id: res.insertId, ...newTodo });
  });
};


module.exports = Todo;