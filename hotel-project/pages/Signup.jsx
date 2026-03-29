import React, { useState } from "react";
import { NavLink } from "react-router";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    let newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!form.number) {
      newErrors.number = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.number)) {
      newErrors.number = "Enter valid 10-digit number";
    }

    // Password
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    return newErrors;
  }

  function handleSignup(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", form);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 to-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-87.5 border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Admin Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}

          {/* Phone */}
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={form.number}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.number && (
            <p className="text-red-400 text-sm">{errors.number}</p>
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded-lg text-white font-semibold shadow-lg mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-300 text-sm text-center mt-4">
          Already have an account? 
          <NavLink
            to="/login"
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
