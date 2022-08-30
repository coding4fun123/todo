const Todo = require('../db/models/todo');

//exporting all four of my methods I defined in
//my Router file 


exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Tasks not found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    console.log(req.body)
    Todo.create(req.body)
        .then((data) => res.json({ message: "Task added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Task unable to be added", error: err.message })
        );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "To Do list updated successfully!", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "To Do list unable to be updated.", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Successfully deleted", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Not found and unable to be deleted.", error: err.message })
        );
};