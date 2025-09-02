import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuth } from "../auth/AuthContext";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password.length >= 6) {
      login(form.email);
      navigate("/dashboard");
    }
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
                className="absolute inset-y-0 right-2 flex items-center"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
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
