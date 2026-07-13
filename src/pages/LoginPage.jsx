
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import PrimaryButton from "../components/common/PrimaryButton";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      login(response.token);

      toast.success("Login Successful!");

navigate(location.state?.from || "/planner");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue planning smarter routes."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <AuthInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={(name) =>
            register(name, {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })
          }
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          register={(name) =>
            register(name, {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })
          }
          error={errors.password}
        />

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="accent-green-600"
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-sm text-green-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <PrimaryButton
          type="submit"
          className="w-full"
        >
          Login
        </PrimaryButton>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-medium text-green-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;