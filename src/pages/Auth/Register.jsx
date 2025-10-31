import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ✅ Helper functions for cleaner toasts
  const notifySuccess = (msg) =>
    toast.success(msg, { position: "top-right", theme: "colored" });

  const notifyError = (msg) =>
    toast.error(msg, { position: "top-right", theme: "colored" });

  // ✅ Joi schema outside the function (for performance & clarity)
  const userSchema = Joi.object({
    name: Joi.string().min(3).max(10).required().messages({
      "string.empty": "Name is required.",
      "string.min": "Name must be at least 3 characters.",
      "string.max": "Name must be less than 10 characters.",
    }),
    email: Joi.string()
      .pattern(/^[^\s@]+@[^\s@]+\.(com|net)$/i)
      .required()
      .messages({
        "string.pattern.base":
          "Please enter a valid email address ending with .com or .net.",
        "string.empty": "Email is required.",
      }),
    password: Joi.string().min(6).max(20).required().messages({
      "string.min": "Password must be at least 6 characters.",
      "string.max": "Password must be less than 20 characters.",
      "string.empty": "Password is required.",
    }),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
      "any.only": "Passwords do not match.",
      "any.required": "Please confirm your password.",
    }),
  });

  // ✅ Controlled inputs
  function getUser(e) {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  }

  // ✅ Form submission
  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = userSchema.validate(user, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => notifyError(err.message));
      return;
    }

    try {
      setLoading(true);

      const { confirmPassword, ...userDataToSend } = user;
      const { data } = await axios.post(
        `${BASE_URL}/auth/signup`,
        userDataToSend
      );

      console.log(data);
      notifySuccess("User Created Successfully!");

      // Reset form
      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      notifySuccess("Account created! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err.response?.data || err.message);
      notifyError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="register-main vh-100 d-flex justify-content-center align-items-center">
        <div
          className="form-box shadow-lg p-4 rounded-4 bg-dark bg-opacity-75"
          style={{ width: "350px" }}
        >
          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <h2 className="text-center mb-3 text-white fw-bold">
              Create Account
            </h2>

            {/* Name */}
            <div>
              <label htmlFor="name" className="form-label text-white">
                User Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUser}
                autoFocus
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={user.email}
                onChange={getUser}
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="form-label text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={user.password}
                onChange={getUser}
                disabled={loading}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="form-label text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                value={user.confirmPassword}
                onChange={getUser}
                disabled={loading}
              />
            </div>

            {/* Submit Button with Animation */}
            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 fw-semibold d-flex justify-content-center align-items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <ImSpinner className="spinner-icon" size={20} />
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default Register;
