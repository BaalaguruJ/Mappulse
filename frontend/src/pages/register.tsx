import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {initialValues, RegisterSchema} from '../../utils/RegisterPageUtils'
import { Link } from "react-router";

const Register: React.FC = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-400 tracking-wide">
          Create Account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("✅ Form Data:", values);
            alert("Registration Successful!");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full p-2.5 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder-gray-400"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Mobile */}
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

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className="w-full p-2.5 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent placeholder-gray-400"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-300 hover:to-red-300 text-white py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>

              {/* Footer */}
              <p className="text-gray-500 text-center text-sm mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
                >
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
