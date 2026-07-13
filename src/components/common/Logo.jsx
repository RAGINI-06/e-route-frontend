import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 select-none"
    >
      <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
        <FaLeaf className="text-green-600 text-lg" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          E-Route
        </h1>
      </div>
    </Link>
  );
}

export default Logo;