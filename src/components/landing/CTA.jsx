import { Link } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div
        className="
        rounded-3xl
        bg-green-600
        text-white
        px-12
        py-16
        text-center
        "
      >

        <h2 className="text-4xl font-bold">
          Ready to Travel Smarter?
        </h2>

        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          Plan eco-friendly routes powered by
          live AQI, traffic, weather and
          environmental intelligence.
        </p>

        <div className="mt-8">

          <Link to="/planner">

            <PrimaryButton>
              Start Planning
            </PrimaryButton>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;