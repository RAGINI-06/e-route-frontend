import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordInput({
  label,
  register,
  name,
  placeholder,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6">

      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label}
      </label>

      <div className="relative">

        <input
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className={`
            w-full
            rounded-xl
            border
            px-4
            py-3
            pr-12
            text-sm
            bg-white
            outline-none
            transition-all
            ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-slate-300 focus:border-green-600 focus:ring-green-100"
            }
            focus:ring-4
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-500
            hover:text-green-600
            transition
          "
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>

      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default PasswordInput;