import { useState } from "react";
import db from "../db";
import Button from "./Button";
import Header from "./Header";

export default function TodoCreateForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const reset = () => {
        setTitle("");
        setDescription("");
        setCompleted(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.todos.add({
                title,
                description,
                completed
            });
            reset();
        } catch (error) {
            console.error(error)
        }
        // trigger notification
    }
    return (
        <form onSubmit={handleSubmit}>
            <Header title="Create A To-Do" />
            <div className="my-4">
                <input
                    required
                    className="w-full border p-2 focus:outline-2 focus:outline-slate-300"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="my-4">
                <textarea
                    required
                    onChange={e => setDescription(e.target.value)}
                    className="w-full border p-2 focus:outline-2 focus:outline-slate-300"
                    placeholder="Description"
                    value={description} />
            </div>
            <div className="my-4 space-x-3">
                <input checked={completed} onChange={e => setCompleted(!completed)} type="checkbox" className="border-slate-300 focus:outline-slate-300" />
                <span className="text-slate-600">Completed</span>
            </div>
            <div className="my-4">
                <Button>
                    Create
                </Button>
            </div>
        </form>
    )
}