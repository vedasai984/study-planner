import { useEffect, useState } from "react";
import Chart from "../components/dashboard/Chart";

const Analytics = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Total Tasks</h2>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Completed</h2>
          <p className="text-2xl font-bold text-green-400">{completed}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Pending</h2>
          <p className="text-2xl font-bold text-red-400">{pending}</p>
        </div>
      </div>

      {/* Chart */}
      <Chart />
    </div>
  );
};

export default Analytics;