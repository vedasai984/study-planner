import { motion } from "framer-motion";

const StatCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <h2 className="text-2xl font-bold mt-2 text-white">{value}</h2>
    </motion.div>
  );
};

export default StatCard;