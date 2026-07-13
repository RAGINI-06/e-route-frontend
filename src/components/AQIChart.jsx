import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "6 AM", aqi: 72 },
  { time: "8 AM", aqi: 65 },
  { time: "10 AM", aqi: 58 },
  { time: "12 PM", aqi: 61 },
  { time: "2 PM", aqi: 75 },
  { time: "4 PM", aqi: 81 },
  { time: "6 PM", aqi: 69 },
];

export default function AQIChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            AQI Trend
          </h2>

          <p className="text-gray-500 text-sm">
            Air Quality Throughout the Day
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          Good
        </span>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#16a34a"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}