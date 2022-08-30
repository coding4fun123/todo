import { useState } from "react";
import axios from "axios";

export function UpdateTodo({ _id, handleComplete, handleEdit }) {
    const [data, setData] = useState
    ({ title: "", description: "", complete: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put(`/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", description: "", complete: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update.");
                console.log(err.message);
            });
    }

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleEdit();
                handleComplete();
            }}
        >
            <label htmlFor="title" className="label">
                Task
            </label>
            <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="description" className="label">
                Description
            </label>
            <input
                type="text"
                name="description"
                className="input"
                onChange={handleChange}
            />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
}