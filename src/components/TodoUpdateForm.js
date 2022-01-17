import { useContext, useState } from "react";
import { SelectedTodoContext } from "../context";
import db from "../db";
import BackButton from "./BackButton";
import Button from "./Button";
import Header from "./Header";

export default function TodoUpdateForm({ todo, onBackPress }) {
    const {
        title: defaultTitle,
        description: defaultDescription,
        completed: defaultCompleted
    } = todo;
    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);
    const [completed, setCompleted] = useState(defaultCompleted);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingTodo = await db.todos.update(todo.id, {
            title, description, completed
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Header title="Update To-Do" />
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
                <Button>
                    Save
                </Button>
            </div>
            <div className="my-4">
                <BackButton onClick={onBackPress}>
                    Save
                </BackButton>
            </div>
        </form>
    )
}