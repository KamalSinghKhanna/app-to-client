"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import cookie from "js-cookie"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
const Login = () => {
  const [loading, setLoading] = useState(false)
   const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter()
   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
   
    try {
       console.log(formData);
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

     cookie.set("token", response.data.accessToken, {
       expires: new Date(Date.now() + 86400 * 1000),
     });
     cookie.set("email", response.data.company.email, {
       expires: new Date(Date.now() + 86400 * 1000),
     });
     toast.success("Logged in sucessfully!")
     router.push("/search/talent")
    } catch (error) {
      toast.error("failed to login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="hidden lg:flex flex-col items-start justify-start w-[70%] m-5 rounded-xl bg-[#EBE8E4] text-black">
          <Link href={"/"} className="f w-full p-5 font-bold text-xl">
            <span>App2Build</span>
          </Link>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={"/sideImg.svg"}
              alt="signup"
              width={2000}
              height={2000}
              className="absolute -right-20"
            />
          </div>
        </div>

        <div className="w-full bg-white flex items-center justify-center">
          <div className="w-full  flex items-center justify-center">
            <div className="max-w-md w-full p-6">
              <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                Sign in
              </h1>
              <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                Welcome back! Sign in to stay connected with us.
              </h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-[#F1EFEC] flex items-center gap-6 pl-5 relative rounded-lg">
                  <Image
                    src={"/email.svg"}
                    width={500}
                    height={500}
                    alt="email"
                    className="w-4 h-3 absolute top-[17px]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="xyz@company.com"
                    required
                    className="mt-1 p-2 pl-10 w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="bg-[#F1EFEC] flex items-center gap-6 pl-5 relative rounded-lg">
                    <Image
                      src={"/password.svg"}
                      width={500}
                      height={500}
                      alt="password"
                      className="w-4 h-4 absolute top-[17px]"
                    />
                    <input
                      autoComplete="off"
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      placeholder="enter your password"
                      required
                      className="mt-1 p-2 pl-10 w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm  focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  >
                    {passwordVisible ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.14.375-.37.724-.678 1.027M21.542 13c-.301.303-.53.653-.676 1.026A9.99 9.99 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.955 9.955 0 01-.676-1.027M9.88 9.88l4.24 4.24m0-4.24l-4.24 4.24"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.14.375-.37.724-.678 1.027M21.542 13c-.301.303-.53.653-.676 1.026A9.99 9.99 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.955 9.955 0 01-.676-1.027"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >
                    {loading ? "signing..." : "Sign in"}
                  </button>
                </div>
              </form>
              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>
                  New here? Create an account{" "}
                  <Link href="/signup" className="text-black hover:underline">
                    Signup here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
