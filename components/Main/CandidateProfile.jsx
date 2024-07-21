"use client"
import React, { useState } from "react";
import ProfileModel from "./ProfileModel";

const CandidateProfile = () => {
    const [showModel, setShowModel] = useState(false)
    const onClose = () =>{
        setShowModel(!showModel)
    }
  return (
    <>
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 flex">
      <div className="flex-1">
        <div className="flex items-center space-x-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/0ef344c1a1a5426ce9e9a0d107acd7ea-1531958700619/a2732f7c-3970-44ed-aa83-315f02429e95.jpg"
            alt="Profile"
          />
          <div>
            <h1 className="text-xl font-bold">Dmytro P</h1>
            <p className="text-gray-600">@dmytroproh</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">
                <i className="fas fa-star"></i>
              </span>
              <span className="ml-1 text-gray-600">5.0 (1.0k)</span>
              <span className="ml-2 text-yellow-500">Top Rated</span>
            </div>
            <p className="text-gray-600 mt-2">Software developer</p>
            <p className="text-gray-600">
              Ukraine <span className="mx-1">•</span> English, Ukrainian
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">About me</h2>
          <p className="text-gray-700 mt-2">
            Hello! I'm Dmytro, python PRO from Kyiv, Ukraine. I'm ready to
            provide you with a high quality services. I'll be happy to resolve
            problems of your business and add some python magic to your life.
            Let's work together!
          </p>
          <button onClick={()=> setShowModel(!showModel)} className="border border-gray-400 hover:bg-gray-200 font-semibold text-gray-900 py-2 px-4 rounded mt-4">
            More about me
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="flex flex-wrap mt-2">
            {[
              "Software developer",
              "Python developer",
              "Data analyst",
              "Convert files expert",
              "PDF conversion expert",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mt-2 px-2.5 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
            <span className="text-gray-600 text-sm font-medium mt-2">+13</span>
          </div>
        </div>
      </div>
      <div className="w-64 h-fit bg-gray-100 p-4 rounded-lg ml-6 flex-shrink-0">
        <h2 className="text-lg font-semibold">Dmytro P</h2>
        <p className="text-gray-600 mt-1">Offline • 07:29 PM local time</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
          Contact me
        </button>
        <p className="text-gray-600 mt-2 text-sm">
          Average response time: 1 hour
        </p>
      </div>
    </div>

    {
      showModel &&  <ProfileModel onClose={onClose}/>
    }
    </>
  );
};

export default CandidateProfile;
