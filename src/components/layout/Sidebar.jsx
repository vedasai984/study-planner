import { Home, Book, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed">
      <h1 className="text-2xl font-bold mb-10">StudyPro</h1>

      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center gap-3 hover:text-green-400">
            <Home size={20} /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/planner" className="flex items-center gap-3 hover:text-green-400">
            <Book size={20} /> Planner
          </Link>
        </li>

        <li>
          <Link to="/analytics" className="flex items-center gap-3 hover:text-green-400">
            <BarChart size={20} /> Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;