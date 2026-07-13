import { FaLeaf } from "react-icons/fa";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-50 grid lg:grid-cols-2">

      {/* LEFT PANEL */}

      <div className="hidden lg:flex flex-col justify-center px-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">

        {/* Decorative circles */}

        <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
            <FaLeaf className="text-4xl" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Welcome to
            <br />
            E-Route
          </h1>

          <p className="mt-6 text-green-100 text-lg leading-8 max-w-md">
            Plan smarter journeys using live traffic,
            air quality, weather, and environmental
            intelligence.
          </p>

          <div className="mt-10 space-y-4 text-green-100">

            <div>✓ Live Traffic Analysis</div>

            <div>✓ Air Quality Monitoring</div>

            <div>✓ Eco Route Recommendation</div>

            <div>✓ Smart Route Planning</div>

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="flex items-center justify-center px-8 py-16">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-3 text-slate-500">
            {subtitle}
          </p>

          <div className="mt-10">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;