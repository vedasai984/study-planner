import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { dark, setDark } = useTheme();

  return (
    <div className="ml-64 h-16 bg-gray-800 dark:bg-gray-900 text-white flex items-center justify-between px-6 shadow">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          {dark ? "Light ☀️" : "Dark 🌙"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;