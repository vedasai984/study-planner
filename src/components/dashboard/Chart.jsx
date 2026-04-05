import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", tasks: 2 },
  { name: "Tue", tasks: 4 },
  { name: "Wed", tasks: 3 },
  { name: "Thu", tasks: 5 },
  { name: "Fri", tasks: 2 },
];

const Chart = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-white mb-4 font-semibold">Weekly Progress</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="tasks" stroke="#22c55e" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;