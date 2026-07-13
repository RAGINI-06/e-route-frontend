import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";

const links = [
  { name: "Home", path: "/" },
  { name: "Planner", path: "/planner" },
  { name: "Dashboard", path: "/dashboard" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-green-600"
                    : "text-slate-700 hover:text-green-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SECTION (DESKTOP) */}
        <div className="hidden md:flex items-center gap-5">

          <Link
            to="/login"
            className="text-sm font-medium text-slate-700 hover:text-green-600 transition-colors"
          >
            Login
          </Link>

          {/* <PrimaryButton>
            Register
          </PrimaryButton> */}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-sm z-50"
          >
            <div className="flex flex-col p-6 gap-5 text-sm font-medium text-slate-700">

              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-green-600"
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="hover:text-green-600"
              >
                Login
              </Link>

              <PrimaryButton>
                Register
              </PrimaryButton>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;