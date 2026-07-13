import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import PrimaryButton from "../components/common/PrimaryButton";

import { registerUser } from "../services/authService";

function RegisterPage() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");
const onSubmit = async (data) => {

  try {

    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    toast.success("Account Created!");

    navigate("/login");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Registration Failed"
    );

  }

};

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start planning eco-friendly journeys today."
    >

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >

        <AuthInput
          label="Full Name"
          name="name"
          placeholder="Enter your name"
          register={register}
          error={errors.name}
        />

        <AuthInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Create a password"
          register={register}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm password"
          register={register}
          error={errors.confirmPassword}
        />

        <div className="pt-2">
          <PrimaryButton
            type="submit"
            className="w-full"
          >
            Create Account
          </PrimaryButton>
        </div>

      </form>

      <p className="mt-8 text-center text-sm text-slate-500">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-medium text-green-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </AuthLayout>
  );
}

export default RegisterPage;