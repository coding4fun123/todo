import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UpdateTodo } from './UpdateTodo';
import { CreateTodo} from './CreateTodo';

function ToDoCard ({ data, handleDelete, handleEdit }) {
    const { _id, title, description, complete } = data
    return (
        <li key={_id}>
            <div className = "task-description">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{complete}</p>
            </div>
            <div className ="btn-container">
                <button name={_id} className="button" onClick={handleEdit}> Edit Task</button>
                <button name={_id} className="button" onClick ={handleDelete}> Delete Task</button>
            </div>
        </li>
        )
}

export function ShowToDos () {
    const [ todo, setTodo] = useState([]);
    const [ complete, setComplete] = useState(false);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(
        function () {
        axios.get("/api/todo/")
        .then((res) => {
            console.log(res.data);
            setTodo(res.data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [todo]);

    function handleDelete(e) {
        axios.delete(`/api/todo/${e.target.name}`);
        setTodo((data) => {
            return data.filter((todo) => todo._id !== e.target.name)
        });
    }

    function handleEdit(e) {
        setId(e.target.name);
        setComplete(true);
    }


    function handleUpdate() {
        console.log("update:", update, !update);
        setUpdate(!update);
    }


    function handleComplete() {
        setId("");
        setComplete(false);
    }



    return (
        <section className="container">
            <Link to ='/CreateTodo' className="create-button">
                <button className="button">Click Here to Add To Your To Do List</button>
            </Link>
            <section className="content">
                <h1 className ="h1"> To Do List</h1>
                <ul className = "list-container">
                {todo.map((data) => (
                        <ToDoCard data={data} 
                        handleEdit = {handleEdit}
                        handleDelete={handleDelete} />
                    ))}
                </ul>
            </section>
            { complete ? (
                <section className="updateContainer">
                    <div className="updateContent">
                        <p onClick={handleComplete} className="complete">
                            &times;
                        </p>
                        <UpdateTodo
                        _id={id}
                        handleComplete={handleComplete}
                        handleUpdate={handleUpdate}
                        />
                    </div>
                    </section>
            ) : (
                ""
            )}
        </section>
    )
};