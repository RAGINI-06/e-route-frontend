import { motion } from "framer-motion";

const sources = [
  "OpenWeather",
  "OpenRouteService",
  "TomTom",
];

function DataSources() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Powered by trusted data sources
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Real-time routing and environmental intelligence APIs
        </p>
      </div>

      {/* Source Cards */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {sources.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 shadow-sm hover:shadow-md transition font-medium"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DataSources;