import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export function CreateTodo() {
    const [data, setData] = 
    useState({ title: "", description: "" });

    function handleChange(e) {
        setData((data) => 
        ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const todo = {
            title: data.title,
            description: data.description,
            complete: data.complete
        };

        console.log({ todo });
        axios.post("/api/todo", data)
            .then((res) => {
                setData({ title: " ", description: "", complete: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error. Could not create task.");
                console.log(err.message);
            });
    }

    return (
        <section className="container">
            <Link to="/" className="home-button">
                <button type="button" className="button">
                    View Tasks
                </button>
            </Link>
            <section className="content">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    noValidate>
                    <label className="label" htmlFor="title">
                        Task
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="description">
                        Task Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="input"
                    />

                    <button type="submit" className="create-button">
                        Create Task
                    </button>
                </form>
            </section>
        </section>
    );
}