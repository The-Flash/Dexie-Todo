import { useReducer, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";
import TodoUpdateForm from "./components/TodoUpdateForm";
import { SelectedTodoContext } from "./context";
import { selectedTodoReducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(selectedTodoReducer, { selectedTodo: null });

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch]);

  return (
    <SelectedTodoContext.Provider value={contextValue}>
      <div className="h-screen p-10 xl:px-96 lg:px-60 bg-slate-100">
        <div className="flex space-x-8">
          <div className="w-3/4">
            <TodoList />
          </div>
          <div className="w-1/4">
            <AnimatePresence>
              {state.selectedTodo === null ?
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <TodoCreateForm key={"unselected"} />
                </motion.div> :
                <motion.div
                  key="selected"
                  layout
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: 100, opacity: 0}}
                >
                  <TodoUpdateForm
                    key={state.selectedTodo.id}
                    todo={state.selectedTodo}
                    onBackPress={() => dispatch({
                      type: "RESET"
                    })}
                  />
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SelectedTodoContext.Provider>
  );
}

export default App;
