"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import cookie from "js-cookie";

const OtpInput = ({ email, setStep }) => {
  const [message, setMessage] = useState("Did not get otp?");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpExpired, setOtpExpired] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setOtpExpired(true);
      setMessage("OTP expired or time over.");
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 4) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpExpired) {
      setMessage("OTP has expired. Please resend OTP.");
      return;
    }
    setLoading(true);
    try {
      const otpString = otp.join("");
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          email,
          otp: otpString,
        }
      );
      cookie.set("step", 3, {
        expires: new Date(Date.now() + 86400 * 1000),
      });
      setStep(3);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response
          ? error.response.data.message
          : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/validate-email",
        { email }
      );
      setMessage(response.data.message);
      setOtpExpired(false);
      setTimer(60); // Reset the timer
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex p-5 sm:p-0 w-full h-full flex-col items-center justify-center gap-10">
      <div className="flex sm:flex-col gap-2 flex-wrap sm:flex-nowrap">
        <h1 className="text-5xl font-bold ">Verify your work</h1>
        <h1 className="text-5xl font-bold">Email</h1>
      </div>
      <div className="flex flex-col gap-4 w-full xs:w-96">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-center gap-5"
        >
          <div className="flex flex-col gap-3 w-full">
            <span className="block text-sm font-medium text-black mb-2">
              Enter the OTP provided via Email.
            </span>
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-sm">
              {otp.map((digit, index) => (
                <div key={index} className="w-10 h-10 xxs:w-14 xxs:h-14 xs:w-16 xs:h-16">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-[#F1EFEC] focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-32 self-start bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "verifying..." : "Verify OTP"}
          </button>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm">{timer} seconds</p>
            <div className="flex items-center gap-2">
              {message && <p className="text-xs">{message}</p>}
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-sm text-blue-700 hover:text-blue-500"
              >
                Resend
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="text-black text-sm">Need Help?</span>
          <a
            href="mailto:support@app2build.com"
            className="text-black text-sm font-bold"
          >
            support@app2build.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
