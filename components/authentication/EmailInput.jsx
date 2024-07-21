"use client"
import React, { useState } from 'react';
import axios from 'axios';
import cookie from "js-cookie";
import Image from 'next/image';
import Link from 'next/link';
const EmailInput = ({ setStep, setEmail }) => {
    const [email, setEmailInput] = useState('');
   const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
       
        e.preventDefault();
        setLoading(true);
        try {
          console.log(email);
          await axios.post("http://localhost:5000/api/auth/validate-email", {
            email,
          });

          cookie.set("step", 2, {
            expires: new Date(Date.now() + 86400 * 1000),
          });
          cookie.set("email", email, {
            expires: new Date(Date.now() + 86400 * 1000),
          });
          setEmail(email);
          setStep(2);
        } catch (error) {
          alert(error.response.data.message);
        } finally {
          setLoading(false);
        }
    };

    return (
      //   <form onSubmit={handleSubmit}>
      //     <div>
      //       <label
      //         for="email"
      //         className="block text-sm font-medium text-gray-700"
      //       >
      //         Email
      //       </label>
      //       <input
      //         type="email"
      //         value={email}
      //         onChange={(e) => setEmailInput(e.target.value)}
      //         placeholder="Enter company email"
      //         required
      //         className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
      //       />
      //     </div>
      //     <button
      //       type="submit"
      //       className="w-full bg-black text-white p-2 mt-5 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
      //     >
      //       Submit
      //     </button>
      //   </form>
      <div className="flex p-5 sm:p-0 w-full h-full flex-col items-center justify-center gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-semibold ">Start hiring with</h1>
          <h1 className="text-5xl font-semibold ">App2 Build</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-96">
          <span className="block text-sm font-medium text-black mb-4">
            Start accessing with your company email address.
          </span>
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
              value={email}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="xyz@company.com"
              required
              className="mt-1 p-2 pl-10 w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm focus:outline-none transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="self-end w-full bg-black text-white p-2 mt-5 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "continue..." : "Continue"}
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            New here? Create an account{" "}
            <Link href="/login" className="text-black hover:underline">
              Login here
            </Link>
          </p>
        </div>
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
    );
};

export default EmailInput;
