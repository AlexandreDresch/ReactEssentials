import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return false;
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          style={{ padding: "8px", width: "80%" }}
        />
        <button
          onClick={addTask}
          style={{ padding: "8px", marginLeft: "10px" }}
        >
          Add
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "all" | "pending" | "completed")
          }
          style={{ padding: "8px", color: "black" }}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span
              onClick={() => toggleTask(task.id)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>
            <button
              onClick={() => removeTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
