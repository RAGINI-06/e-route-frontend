import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaLeaf,
  FaCloudSun,
  FaTrafficLight,
  FaRoad,
} from "react-icons/fa";

function Metric({ title, value, color }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
      <p className="text-xs text-slate-500">{title}</p>

      <h4 className={`mt-1 font-semibold ${color}`}>
        {value}
      </h4>
    </div>
  );
}

function HeroMapCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: .25 }}
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-sm
      overflow-hidden
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

        <div>

          <h3 className="font-semibold text-slate-900">
            Bangalore → Mysore
          </h3>

          <p className="text-sm text-slate-500">
            Recommended Eco Route
          </p>

        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          Live
        </span>

      </div>

      {/* Fake Map */}

      <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">

        {/* Roads */}

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 260"
        >
          <path
            d="M40 210 C140 100 250 240 450 60"
            stroke="#16a34a"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="10 8"
          />
        </svg>

        {/* Source */}

        <div className="absolute left-10 bottom-8 flex flex-col items-center">
          <FaMapMarkerAlt className="text-green-600 text-xl" />
          <span className="text-xs mt-1 text-slate-600">
            Source
          </span>
        </div>

        {/* Destination */}

        <div className="absolute right-10 top-8 flex flex-col items-center">
          <FaMapMarkerAlt className="text-red-500 text-xl" />
          <span className="text-xs mt-1 text-slate-600">
            Destination
          </span>
        </div>

        {/* Floating Eco Score */}

        <div className="absolute top-6 left-6 bg-white rounded-xl shadow-md px-4 py-2">

          <p className="text-xs text-slate-500">
            Eco Score
          </p>

          <h3 className="font-bold text-green-600 text-lg">
            91
          </h3>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-2 gap-3 p-5">

        <Metric
          title="AQI"
          value="42 Good"
          color="text-green-600"
        />

        <Metric
          title="Traffic"
          value="Low"
          color="text-orange-500"
        />

        <Metric
          title="Weather"
          value="26°C"
          color="text-blue-500"
        />

        <Metric
          title="Distance"
          value="18 km"
          color="text-slate-900"
        />

      </div>

      <div className="border-t border-slate-200 px-5 py-4 flex justify-between">

        <div className="flex items-center gap-2">

          <FaRoad className="text-green-600"/>

          <span className="text-sm text-slate-600">
            Duration
          </span>

        </div>

        <span className="font-semibold">
          28 min
        </span>

      </div>

    </motion.div>
  );
}

export default HeroMapCard;