const express = require('express')
const router = express.Router();

//importing my methods for my CRUD operations and 
//adding the methods to the end points

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require('../controllers/todo');
console.log(postCreateTodo)

//@route GET api/todo
//using GET method to display all ToDo's/tasks

router.get("/", getAllTodo);

//@route POST api/todo
//using POST method to add a new Todo task

router.post("/", postCreateTodo);

//@route PUT api/todo:id
//PUT method to update ToDo list accoring to id

router.put("/:id", putUpdateTodo);

//@route DELETE api/todo/:id
//DELETE a task on the ToDo list according to id

router.delete("/:id", deleteTodo);

module.exports = router;