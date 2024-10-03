import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { motion } from "framer-motion";

import { signinSchema } from "../../utils/validationSchemas";
import { useSigninMutation } from "../../features/auth/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setCredentials } from "../../features/auth/authSlice";
import { ApiResponseError } from "../../types";
import { Link } from "react-router-dom";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const [signin, { isLoading }] = useSigninMutation();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col mt-8 mb-8 bg-secondary rounded-lg px-8 py-8 md:w-1/2 w-full">
      <h2 className="font-secondary font-semibold text-2xl text-main">
        TechSphere
      </h2>
      <p className="font-primary text-sm text-gray-700">
        Please sign in to continue
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signinSchema}
        onSubmit={async (values) => {
          try {
            const response = await signin({
              email: values.email,
              password: values.password,
            }).unwrap();
            if (response.ok) {
              toast.success(response.message);
              dispatch(
                setCredentials({
                  token: response.data!.token,
                  user: response.data!.user,
                })
              );
            }
          } catch (error: unknown) {
            if (
              error &&
              typeof error === "object" &&
              "data" in error &&
              (error as ApiResponseError).data
            ) {
              toast.error((error as ApiResponseError).data.message);
            } else {
              toast.error("An unknown error occurred");
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4 mt-4 font-primary">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                id="email"
                className="px-3 py-2 rounded-md focus:outline-none focus:border-2 focus:border-main"
              />
              {errors.email && touched.email ? (
                <div className="text-red-700 text-sm">{errors.email}</div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <div className="w-full relative flex justify-center items-center">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-2 focus:border-main w-full"
                />
                <motion.button
                  initial={{ opacity: 1 }}
                  whileTap={{ opacity: 0.5 }}
                  type="button"
                  className="absolute right-5"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {!showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </motion.button>
              </div>

              {errors.password && touched.password ? (
                <div className="text-red-700 text-sm">{errors.password}</div>
              ) : null}
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="bg-main mt-2 text-white px-12 w-full py-2 rounded-md"
              >
                {!isLoading ? "Sign in" : "Loading..."}
              </motion.button>
              <Link to="/auth/signup" className="text-sm">
                Don't have an account?{" "}
                <span className="text-main italic">Sign up</span> Now
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
