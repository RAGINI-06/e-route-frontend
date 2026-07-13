function AuthInput({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) {
  return (
    <div className="mb-6">

      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          text-sm
          outline-none
          transition-all
          bg-white
          ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-slate-300 focus:border-green-600"
          }
          focus:ring-4
          ${
            error
              ? "focus:ring-red-100"
              : "focus:ring-green-100"
          }
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default AuthInput;