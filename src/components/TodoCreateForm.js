import { useState } from "react";
import db from "../db";

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
            console.log("Added");
            alert("Added")
        } catch (e) {
            console.error(e)
        }
        // trigger notification
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="my-4">
                <input
                    className="w-full border p-2 focus:outline-2 focus:outline-slate-300"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="my-4">
                <textarea
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
                <button className="w-full bg-purple-600 hover:bg-purple-700 font-semibold text-white p-2">Create</button>
            </div>
        </form>
    )
}