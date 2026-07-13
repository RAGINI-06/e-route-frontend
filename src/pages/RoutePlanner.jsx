import Navbar from "../components/common/Navbar";

import PlannerSidebar from "../components/planner/PlannerSidebar";
import PlannerMap from "../components/planner/PlannerMap";
import PlannerResult from "../components/planner/PlannerResult";
import RecommendationCard from "../components/planner/RecommendationCard";
import { useState } from "react";
 function RoutePlanner() {
//   return (
//     <div className="min-h-screen bg-slate-50">

//       <Navbar />

//       <main className="max-w-[1600px] mx-auto px-6 py-6">

//         <div className="grid grid-cols-12 gap-6">
     

//           <div className="col-span-3">
//             <PlannerSidebar />
//           </div>


//           <div className="col-span-6">
//             <PlannerMap />
//           </div>



//           <div className="col-span-3">
//             <PlannerResult />
//           </div>

//         </div>

//         <div className="mt-6">
//           <RecommendationCard />
//         </div>

//       </main>

//     </div>
//   );
// }

// export default RoutePlanner;
// import { useState } from "react";

// import Navbar from "../components/common/Navbar";

// import PlannerSidebar from "../components/planner/PlannerSidebar";
// import PlannerMap from "../components/planner/PlannerMap";
// import PlannerResult from "../components/planner/PlannerResult";
// import RecommendationCard from "../components/planner/RecommendationCard";

// function RoutePlanner() {

  const [routeData, setRouteData] = useState(null);

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="max-w-[1600px] mx-auto px-6 py-6">

        <div className="grid grid-cols-12 gap-6">

          {/* Sidebar */}

          <div className="col-span-3">

            <PlannerSidebar
              setRouteData={setRouteData}
              loading={loading}
              setLoading={setLoading}
            />

          </div>

          {/* Map */}

          <div className="col-span-6">

            <PlannerMap
              routeData={routeData}
            />

          </div>

          {/* Result */}

          <div className="col-span-3">

            <PlannerResult
              routeData={routeData}
            />

          </div>

        </div>

        {/* Recommendation */}

        <div className="mt-6">

          <RecommendationCard
            routeData={routeData}
          />

        </div>

      </main>

    </div>
  );
}

export default RoutePlanner;