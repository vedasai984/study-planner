import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import StatCard from "./components/dashboard/StatCard";
import Chart from "./components/dashboard/Chart";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 min-h-screen text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="ml-64 mt-16 p-6">
        <Routes>

          {/* Dashboard Page */}
          <Route
            path="/"
            element={
              <>
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard title="Total Tasks" value="12" />
                  <StatCard title="Completed" value="8" />
                  <StatCard title="Pending" value="4" />
                </div>

                <Chart />
              </>
            }
          />

          {/* Planner Page */}
          <Route path="/planner" element={<Planner />} />

          {/* Analytics Page */}
          <Route path="/analytics" element={<Analytics />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
