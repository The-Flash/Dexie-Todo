import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";

export default function TodoList() {
    const todos = useLiveQuery(() => db.todos.toArray());
    console.log(todos)
    return (
        <div className="my-4">Todo List</div>
    )
}