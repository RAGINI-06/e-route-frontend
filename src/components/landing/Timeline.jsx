import { motion } from "framer-motion";
import { FaSearch, FaChartLine, FaExchangeAlt, FaLeaf } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Search Route",
    desc: "User enters start and destination points.",
  },
  {
    icon: FaChartLine,
    title: "Analyze Data",
    desc: "We process AQI, weather, traffic, and emission data.",
  },
  {
    icon: FaExchangeAlt,
    title: "Compare Routes",
    desc: "Multiple routes are evaluated in real-time.",
  },
  {
    icon: FaLeaf,
    title: "Eco Recommendation",
    desc: "Best eco-friendly route is suggested.",
  },
];

function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          How It Works
        </h2>
        <p className="text-slate-500 mt-3">
          Simple 4-step intelligent routing system
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-slate-200 ml-6 md:ml-16">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              {/* Icon circle */}
              <div className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 border border-green-200">
                <Icon className="text-green-600 text-sm" />
              </div>

              {/* Content card */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;