import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import { useAuth } from "../auth/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
    agree: "",
    general: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z]{2,60}$/;
    const passRegex = /^[A-Za-z]{9,29}$/;
    let newErrors = { first: "", last: "", email: "", password: "", confirm: "", agree: "", general: "" };
    if (!nameRegex.test(form.first)) newErrors.first = "Letters only (2-60)";
    if (!nameRegex.test(form.last)) newErrors.last = "Letters only (2-60)";
    if (!form.email.includes("@")) newErrors.email = "Email must include @";
    if (!passRegex.test(form.password)) newErrors.password = "Password 9-29 letters";
    if (form.confirm !== form.password) newErrors.confirm = "Passwords do not match";
    if (!form.agree) newErrors.agree = "You must agree";
    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }
    const ok = signup({
      email: form.email,
      password: form.password,
      first: form.first,
      last: form.last,
    });
    if (!ok) {
      setErrors({ ...newErrors, general: "Username already exists" });
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9fafb] p-4">
      <Card className="w-full max-w-md space-y-6 p-8">
        <h1 className="text-center text-2xl font-semibold">Sign up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First name</label>
              <Input
                value={form.first}
                onChange={(e) => setForm({ ...form, first: e.target.value })}
                required
              />
              {errors.first && (
                <p className="text-xs text-red-600 mt-1">{errors.first}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <Input
                value={form.last}
                onChange={(e) => setForm({ ...form, last: e.target.value })}
                required
              />
              {errors.last && (
                <p className="text-xs text-red-600 mt-1">{errors.last}</p>
              )}
            </div>
          </div>
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
            <Input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <Input
              type="password"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              required
            />
            {errors.confirm && (
              <p className="text-xs text-red-600 mt-1">{errors.confirm}</p>
            )}
          </div>
          <label className="flex items-center space-x-2 text-sm">
            <Checkbox
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            <span>By signing up, I agree with the Terms of Use & Privacy Policy</span>
          </label>
          {errors.agree && (
            <p className="text-xs text-red-600">{errors.agree}</p>
          )}
          {errors.general && (
            <p className="text-xs text-red-600">{errors.general}</p>
          )}
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
        <p className="text-center text-sm">
          Already have an account? <Link to="/login" className="text-[#2563eb]">Log in</Link>
        </p>
        <div className="flex items-center space-x-2">
          <hr className="flex-1" />
          <span className="text-xs text-gray-500">OR</span>
          <hr className="flex-1" />
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary" className="rounded-full p-0 h-12 w-12">G</Button>
          <Button variant="secondary" className="rounded-full p-0 h-12 w-12">F</Button>
          <Button variant="secondary" className="rounded-full p-0 h-12 w-12"></Button>
        </div>
      </Card>
    </div>
  );
}
