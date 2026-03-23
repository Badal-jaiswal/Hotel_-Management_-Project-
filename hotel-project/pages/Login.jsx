import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 px-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
        
        {/* Logo / Title */}
        <div className="text-center mb-8">
            <img src="" className="w-12 mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-white">Hotel Management</h1>
          <p className="text-gray-300 text-sm mt-2">Admin Login Panel</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="admin@hotel.com"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
<div className="mt-6 text-center space-y-3">
  
  <p className="text-gray-400 text-sm">
    © 2026 HotelSphere Management
  </p>

  <p className="text-gray-300 text-sm">
    Don’t have an account?
  </p>

  <button
    className="w-full py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
  >
    Sign Up
  </button>

</div>
      </div>
    </div>
  );
}

export default Login;