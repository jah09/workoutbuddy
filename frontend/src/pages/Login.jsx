import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login,error,loading } = useLogin()
  //sign up button
  const handleSubmit = async (e) => {
    e.preventDefault();
   await login(email,password);
  };
  return (
    <div className="  p-4 py-4 justify-center flex ">
      <div className="max-w-lg w-full   mt-10">
        <div className="bg-[#09150c] rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-myfontcolor ">
              Welcome to WorkoutBuddy
            </h2>
            <p className="mt-4 text-center text-myfontcolor">
              Sign in to continue
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm  ">
                <div>
                  <label className="sr-only text-white " htmlFor="email">
                    Email address
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="appearance-none relative block w-full px-3 py-4     bg-[#020904] text-myfontcolor rounded-md focus:outline-none   focus:z-10 sm:text-sm"
                    required=""
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only text-white " htmlFor="password">
                    Password
                  </label>
                  <input
                    placeholder="Password"
                    className="appearance-none relative block w-full px-3 py-4     bg-[#020904]  text-white rounded-md focus:outline-none    focus:z-10 sm:text-sm"
                    required=""
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end mt-4">
                <div className="text-sm">
                  <a className="font-medium text-myfontcolor" href="#">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button disabled={loading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-primarycolor   focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  type="submit"
                >
                  Sign In
                </button>
                {error && (
                  <div className="py-2">
                    {" "}
                    <p className="text-red-600 ">{error}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="px-8 py-4  text-center">
            <span className="text-myfontcolor">Don't have an account?</span>
            <a
              className="font-medium text-myfontcolor pl-2 underline"
              href="/register"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
