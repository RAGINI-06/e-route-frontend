import {
  FaWind,
  FaCloudSun,
  FaTrafficLight,
  FaLeaf,
} from "react-icons/fa";

function EnvironmentalStats() {
  const stats = [
    {
      icon: <FaLeaf size={22} />,
      title: "Air Quality",
      value: "AQI 42",
      color: "text-green-600",
    },
    {
      icon: <FaTrafficLight size={22} />,
      title: "Traffic",
      value: "Low",
      color: "text-orange-500",
    },
    {
      icon: <FaCloudSun size={22} />,
      title: "Weather",
      value: "26°C",
      color: "text-blue-500",
    },
    {
      icon: <FaWind size={22} />,
      title: "Wind",
      value: "8 km/h",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition"
          >
            <div className={item.color}>{item.icon}</div>

            <p className="text-slate-500 text-sm mt-4">
              {item.title}
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              {item.value}
            </h2>
          </div>
        ))}

      </div>
    </section>
  );
}

export default EnvironmentalStats;