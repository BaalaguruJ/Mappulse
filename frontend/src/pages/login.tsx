import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router";
import {LoginSchema, initialValues} from '../../utils/LoginPageUtils'

const Login: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-400 tracking-wide">
          Welcome Back
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("✅ Login Data:", values);
            alert("Login Successful!");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* Mobile Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mobile Number
                </label>
                <Field
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  className="w-full p-2.5 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder-gray-400"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2.5 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder-gray-400"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-300 hover:to-red-300 text-white py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              {/* Sign Up */}
              <p className="text-gray-500 text-center text-sm mt-4">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
