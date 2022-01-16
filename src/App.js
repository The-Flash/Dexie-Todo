import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container h-screen p-10">
      <div className="flex space-x-8">
        <div className="w-3/4">
          <h2 className="text-center font-bold text-lg bg-slate-200 rounded-md p-2">
            My To-Dos
          </h2>
          <TodoList/>
        </div>
        <div className="w-1/4">
          <h2 className="text-center font-bold text-lg bg-slate-200 rounded-md p-2">
            Create A To-Do
          </h2>
          <TodoCreateForm />
        </div>
      </div>
    </div>
  );
}

export default App;
