function PlannerResult({ routeData }) {

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm h-full">

      <h2 className="text-xl font-semibold mb-6">
        Route Summary
      </h2>

      <div className="space-y-4">

        <Item
          title="Eco Score"
          value={routeData?.score ?? "--"}
        />

        <Item
          title="AQI"
          value={routeData?.averageAQI ?? "--"}
        />

        <Item
          title="Temperature"
          value={
            routeData
              ? `${routeData.temperature} °C`
              : "--"
          }
        />

        <Item
          title="Humidity"
          value={
            routeData
              ? `${routeData.humidity}%`
              : "--"
          }
        />

        <Item
          title="Wind Speed"
          value={
            routeData
              ? `${routeData.windSpeed} m/s`
              : "--"
          }
        />

        <Item
          title="Traffic"
          value={routeData?.congestionLevel ?? "--"}
        />

        <Item
          title="Distance"
          value={
            routeData
              ? `${(routeData.distance / 1000).toFixed(2)} km`
              : "--"
          }
        />

        <Item
          title="Duration"
          value={
            routeData
              ? `${Math.round(routeData.duration / 60)} min`
              : "--"
          }
        />

      </div>

    </div>
  );
}

function Item({ title, value }) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-3">

      <span className="text-slate-500">
        {title}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}

export default PlannerResult;