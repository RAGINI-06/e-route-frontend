import { motion } from "framer-motion";

const stats = [
  { label: "AQI", value: "Good", color: "text-green-600" },
  { label: "Traffic", value: "Moderate", color: "text-yellow-600" },
  { label: "Weather", value: "Sunny", color: "text-blue-600" },
  { label: "Wind", value: "12 km/h", color: "text-slate-700" },
];

function EnvironmentalStats() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
        >
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className={`text-lg font-semibold mt-1 ${item.color}`}>
            {item.value}
          </p>
        </motion.div>
      ))}
    </section>
  );
}

export default EnvironmentalStats;