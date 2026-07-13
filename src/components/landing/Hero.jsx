import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";
import { Link } from "react-router-dom";
import HeroMapCard from "./HeroMapCard";

function Hero() {
  return (
<section className="relative overflow-hidden max-w-7xl mx-auto px-8 pt-28 pb-24">

      {/* soft background glow */}
     <div className="absolute inset-0 -z-10">

    <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)]
        bg-[size:40px_40px]
        opacity-40
        "
    />

    <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/30 blur-3xl rounded-full"/>

    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"/>

</div>
        {/* <div className="absolute top-10 left-20 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full" />
      </div> */}

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 + leading-[1.1]">
          Find the Smartest Route,
          <br />
          Not Just the Fastest.
        </h1>

        <p className="mt-5 text-slate-600 text-base md:text-lg max-w-xl">
          Optimize your travel using real-time AQI, traffic, weather and
          environmental insights. Reduce emissions while saving time.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link to="/planner">
            <PrimaryButton>
              Plan Route
            </PrimaryButton>
          </Link>

          <button className="text-sm font-medium text-slate-700 hover:text-green-600 transition-colors">
            Learn More
          </button>
        </div>

        {/* mini trust line */}
        <p className="mt-6 text-xs text-slate-400">
          Powered by OpenWeather • OpenRouteService • NASA FIRMS
        </p>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full"
      >
        <HeroMapCard />
      </motion.div>

    </section>
  );
}

export default Hero;