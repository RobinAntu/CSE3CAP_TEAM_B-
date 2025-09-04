import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailErr = "";
    let passErr = "";
    if (!form.email.includes("@")) emailErr = "Email must include @";
    if (!/^[A-Za-z]{9,29}$/.test(form.password))
      passErr = "Password must be 9-29 letters";
    if (emailErr || passErr) {
      setErrors({ email: emailErr, password: passErr, general: "" });
      return;
    }
    const ok = login(form.email, form.password);
    if (!ok) {
      setErrors({ email: "", password: "", general: "Invalid credentials" });
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9fafb] p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="mx-auto h-12 w-12 rounded bg-blue-500" aria-label="logo placeholder" />
        <Link to="/login" className="block text-center text-[#2563eb]">
          Study Flex
        </Link>
        <h1 className="text-center text-2xl font-semibold">Welcome Back</h1>
        <p className="text-center text-gray-500">Login to your account</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <Input
                type={show ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-sm"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password}</p>
            )}
          </div>
          {errors.general && (
            <p className="text-xs text-red-600">{errors.general}</p>
          )}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="flex justify-between text-sm">
          <Link to="#" className="text-[#2563eb]">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-[#2563eb]">
            Don’t have an account? Sign up
          </Link>
        </div>
        <p className="text-center text-xs text-gray-500">Made with Visily</p>
      </Card>
    </div>
  );
}
