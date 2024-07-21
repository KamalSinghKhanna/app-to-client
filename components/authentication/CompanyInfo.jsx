"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
const CompanyInfo = ({ email }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
   const [passwordVisible, setPasswordVisible] = useState(false);

   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          email,
          companyName,
          companyWebsite,
          password,
        }
      );
      // console.log(response);
      // console.log(response.data.accessToken);
      cookie.set("token", response.data.accessToken, {
        expires: new Date(Date.now() + 86400 * 1000),
      });
      // cookie.set("email", response.data.comapnay.email);
      cookie.remove("step")
      // cookie.remove("email")
      toast.success("Company info and password saved successfully");
      router.push("/categories");
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex p-5 sm:p-0 w-full h-full flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold ">Enter company</h1>
          <h1 className="text-5xl font-bold">Details</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-96">
          <div className="mb-6">
            <label
              htmlFor="companyname"
              className="block text-sm font-medium text-black mb-2"
            >
              Company name
            </label>
            <div className="bg-[#F1EFEC] flex items-center gap-6 pl-5 relative rounded-lg">
              <Image
                src={"/email.svg"}
                width={500}
                height={500}
                alt="email"
                className="w-4 h-3 absolute top-[17px]"
              />
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                required
                className="mt-1 p-2 pl-10 w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm  focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="companywebsite"
              className="block text-sm font-medium text-black mb-2"
            >
              Company website
            </label>

            <div className="bg-[#F1EFEC] flex items-center gap-6 pl-5 relative rounded-lg">
              <Image
                src={"/website.svg"}
                width={500}
                height={500}
                alt="website"
                className="w-4 h-3 absolute top-[17px]"
              />
              <input
                type="text"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                placeholder="Enter company website"
                required
                className="mt-1 p-2 pl-10 w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm  focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="companywebsite"
              className="block text-sm font-medium text-black mb-2"
            >
              password
            </label>
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
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 mt-5 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "submit..." : "Submit"}
          </button>
        </form>
        <div className="flex items-center gap-2">
          <span className="text-black text-sm">Need Help?</span>
          <a
            href="mailto:support@app2build.com"
            className="text-black text-sm font-bold"
          >
            support@app2build.com
          </a>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default CompanyInfo;
