import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //sign up button
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
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
              Register to have an account
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm">
                <div>
                  <label className="text-white ">Email address</label>
                  <input
                    placeholder="Email address"
                    className="appearance-none relative block w-full px-3 py-4     bg-[#020904] text-myfontcolor rounded-md focus:outline-none   focus:z-10 sm:text-sm"
                    required=""
                    autoComplete="email"
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 ">
                  <label className="text-white ">Password</label>
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="appearance-none relative block w-full px-3 py-4     bg-[#020904]  text-white rounded-md focus:outline-none    focus:z-10 sm:text-sm"
                      required=""
                      autoComplete="current-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                    />

                    <div
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3   "
                    >
                      {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </div>
                  </div>
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
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-primarycolor   focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  disabled={loading}
                >
                  Sign Up
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
          <div className="px-8   text-center  py-4 mb-15">
            <span className="text-myfontcolor">Already have an account?</span>
            <a
              className="font-medium text-myfontcolor pl-2 underline "
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
