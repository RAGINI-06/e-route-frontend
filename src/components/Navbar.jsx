import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-green-600"
        >
          E-Route
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">

          <NavLink
            to="/"
            className={({isActive}) =>
              isActive
                ? "text-green-600"
                : "text-slate-700 hover:text-green-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/planner"
            className={({isActive}) =>
              isActive
                ? "text-green-600"
                : "text-slate-700 hover:text-green-600 transition"
            }
          >
            Planner
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({isActive}) =>
              isActive
                ? "text-green-600"
                : "text-slate-700 hover:text-green-600 transition"
            }
          >
            Dashboard
          </NavLink>

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="text-slate-700 hover:text-green-600 transition"
          >
            Login
          </Link>

       {/* <Link to="/register">
    <PrimaryButton>
        Register
    </PrimaryButton>
</Link> */}
        </div>

      </div>
    </header>
  );
}

export default Navbar;