import { Link } from "react-router-dom";
import { FaLeaf, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                <FaLeaf className="text-green-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                E-Route
              </h2>
            </div>

            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              Smart eco-friendly route planning using real-time environmental
              data.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Product
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <Link to="/planner" className="hover:text-green-600">Planner</Link>
              <Link to="/dashboard" className="hover:text-green-600">Dashboard</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Company
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="#" className="hover:text-green-600">About</a>
              <a href="#" className="hover:text-green-600">Privacy</a>
              <a href="#" className="hover:text-green-600">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Connect
            </h3>

            <div className="flex gap-4 text-slate-600">
              <a href="#" className="hover:text-green-600">
                <FaGithub size={18} />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} E-Route. All rights reserved.</p>
          <p>Built with React + Tailwind + Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;