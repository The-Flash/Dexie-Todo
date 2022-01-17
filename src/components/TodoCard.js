import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdClose } from "react-icons/md"
import db from "../db";
export default function TodoCard({ i, todo, onClick }) {
    const { title, description } = todo;
    const [isVisible, setIsVisible] = useState(true);
    const handleDelete = async (e) => {
        e.stopPropagation();
        await db.todos.where("id").equals(todo.id).delete();
        setIsVisible(false);
    }

    return (
        <AnimatePresence>
            <motion.div
                layout
                key={isVisible}
                initial={{
                    opacity: 0, x: 200, transition: {
                        duration: i * 0.08
                    }
                }}
                animate={{
                    opacity: 1, x: 0, transition: {
                        duration: i * 0.08
                    }
                }}
                exit={{
                    opacity: 0, x: 200, transition: {
                        duration: 0.5
                    },
                }}
                // transition={{
                //     duration: i * 0.08
                // }}
                onClick={onClick}
                className="my-4 p-2 rounded-md bg-white shadow-sm cursor-pointer flex justify-between">
                <div>
                    <p className="font-medium text-gray-500">{title}</p>
                    <p className="text-slate-500">{description}</p>
                </div>
                <div className="flex justify-center items-center p-3">
                    <button onClick={handleDelete} className="bg-gray-300 p-1 rounded-full">
                        <MdClose />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}