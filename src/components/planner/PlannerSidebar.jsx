import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  createRoute,
  getRecommendation,
} from "../../services/routeService";

function PlannerSidebar({
  setRouteData,
  loading,
  setLoading,
}) {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
const [travelMode, setTravelMode] = useState("driving-car");
 const handleRoute = async () => {

    if (!source || !destination) {
        toast.error("Please enter source and destination");
        return;
    }

    try {

        setLoading(true);

        // Step 1
        const route = await createRoute(
            source,
            destination,
                travelMode,
        );
        

        // Step 2
        const recommendation =
            await getRecommendation(route.id);

        setRouteData(recommendation);

        toast.success("Route Generated!");

    }
    catch (error) {

        console.log(error);

        toast.error("Unable to generate route");

    }
    finally {

        setLoading(false);

    }

};
  return (

    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        Plan Eco Route
      </h2>

      <p className="text-sm text-slate-500 mt-1">
        Find the cleanest route.
      </p>

      <div className="mt-8 space-y-5">

        <div>

          <label className="block text-sm font-medium mb-2">
            Source
          </label>

          <input
            value={source}
            onChange={(e)=>setSource(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            placeholder="Enter source"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Destination
          </label>

          <input
            value={destination}
            onChange={(e)=>setDestination(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            placeholder="Enter destination"
          />

        </div>
        <div className="mt-6">
  <label className="block text-sm font-medium text-slate-700 mb-3">
    Travel Mode
  </label>

  <div className="grid grid-cols-3 gap-3">

    <button
      type="button"
      onClick={() => setTravelMode("driving-car")}
      className={`rounded-lg border p-3 transition ${
        travelMode === "driving-car"
          ? "border-green-600 bg-green-50"
          : "border-slate-200 hover:border-green-400"
      }`}
    >
      <div className="text-2xl">🚗</div>
      <p className="text-sm font-medium mt-2">Driving</p>
    </button>

    <button
      type="button"
      onClick={() => setTravelMode("cycling-regular")}
      className={`rounded-lg border p-3 transition ${
        travelMode === "cycling-regular"
          ? "border-green-600 bg-green-50"
          : "border-slate-200 hover:border-green-400"
      }`}
    >
      <div className="text-2xl">🚴</div>
      <p className="text-sm font-medium mt-2">Cycling</p>
    </button>

    <button
      type="button"
      onClick={() => setTravelMode("foot-walking")}
      className={`rounded-lg border p-3 transition ${
        travelMode === "foot-walking"
          ? "border-green-600 bg-green-50"
          : "border-slate-200 hover:border-green-400"
      }`}
    >
      <div className="text-2xl">🚶</div>
      <p className="text-sm font-medium mt-2">Walking</p>
    </button>

  </div>
</div>

        <button
          onClick={handleRoute}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium transition"
        >
          {loading ? "Finding Route..." : "Plan Eco Route"}
        </button>

      </div>

    </div>

  );

}

export default PlannerSidebar;