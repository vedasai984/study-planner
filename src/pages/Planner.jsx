import { useState, useEffect } from "react";

const Planner = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Planner</h1>

      <div className="flex gap-4 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          className="px-4 py-2 rounded bg-gray-800 w-full"
        />
        <button
          onClick={addTask}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <div
            key={task.id}
            className="bg-gray-900 p-4 rounded flex justify-between items-center"
          >
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.text}
            </span>

            <div className="flex gap-3">
              <button
                onClick={() => toggleTask(task.id)}
                className="text-green-400"
              >
                ✔
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;