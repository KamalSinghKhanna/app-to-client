"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import EmailInput from './EmailInput'
import OtpInput from './OtpInput'
import CompanyInfo from './CompanyInfo'
import cookie from "js-cookie"


const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

   useEffect(() => {
     const count = cookie.get("step");
     const emailId = cookie.get("email");
     if (count) {
       setStep(Number(count));
     }
     if (emailId) {
       setEmail(emailId);
     }
   }, []);
  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:flex flex-col items-start justify-start w-[70%] m-5 rounded-xl bg-[#EBE8E4] text-black">
        <Link href={"/"} className="f w-full p-5 font-bold text-xl">
          <span>App2Build</span>
        </Link>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image src={"/sideImg.svg"} alt="signup" width={2000} height={2000} className='absolute -right-20'/>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center">
        {step === 1 && <EmailInput setStep={setStep} setEmail={setEmail} />}
        {step === 2 && <OtpInput email={email} setStep={setStep} />}
        {step === 3 && <CompanyInfo email={email} />}
      </div>
    </div>
  );
}

export default Signup