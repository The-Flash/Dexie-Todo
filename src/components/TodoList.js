import { useContext } from "react";
import { motion } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";
import TodoCard from "./TodoCard";
import { SelectedTodoContext } from "../context";

export default function TodoList() {
    const todos = useLiveQuery(() => db.todos.toArray());
    const { state, dispatch } = useContext(SelectedTodoContext);

    return (
        <>
            <h2 className="text-center font-bold text-lg bg-slate-200 rounded-md p-2">
                My To-Dos
            </h2>
            {todos && todos.map((todo, i) => (
                <TodoCard
                    key={i}
                    i={i}
                    onClick={() => dispatch({
                        type: "CHANGE",
                        payload: todo
                    })}
                    todo={todo}
                />
            ))}
        </>
    )
}