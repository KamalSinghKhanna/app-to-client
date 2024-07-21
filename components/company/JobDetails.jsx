import Link from "next/link";
import React from "react";
// import { FaArrowLeft, FaShareAlt, FaEllipsisH } from "react-icons/fa";

const JobDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <Link href={"/company-jobs"} className="flex items-center mb-4 text-gray-600">
        {/* <FaArrowLeft className="mr-2" /> */}
        Back
      </Link>
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="https://nextlevel.app/_next/image?url=https%3A%2F%2Fuam-cdn.nextlevel.app%2Fcreate-company%2F3cf26327-d376-4434-9131-03f0eb1c4d1e-1716014252&w=128&q=75"
              alt="Company logo"
              className="h-16 w-16 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold">Frontend Developer</h1>
              <p className="text-gray-600">Great Learning</p>
              <p className="text-gray-600">
                2h ago <span className="text-blue-600 ml-2">11 NEW</span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-black text-white rounded py-2 px-4 mr-2">
              shortlisted applications
            </button>
            {/* <FaShareAlt className="text-gray-600 mr-2" />
            <FaEllipsisH className="text-gray-600" /> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-4 max-w-md">
          <div>
            <h3 className="text-sm font-bold text-gray-600">SALARY</h3>
            <p className="text-sm">₹3.5L-8.5L</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-600">EXPERIENCE</h3>
            <p className="text-sm">Just out of college</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-600">LOCATION</h3>
            <p className="text-sm">(Remote)</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">Skills required</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
            Next.js
          </span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
            HTML
          </span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
            React.js
          </span>
          <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
            CSS
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2">Job description</h3>
        <p className="mb-4">- About the job</p>
        <ul className="list-disc list-inside text-sm text-gray-600 leading-7">
          <li>Designing and developing user interfaces using ReactJS.</li>
          <li>
            Consuming RESTful APIs to connect web applications to back-end
            services.
          </li>
          <li>
            Adapting interfaces for modern internet applications using the
            latest front-end technologies.
          </li>
          <li>
            Writing efficient, reusable, and scalable JavaScript, CSS, and HTML.
          </li>
          <li>
            Conducting product analysis tasks to identify and fix issues, and
            improve performance.
          </li>
          <li>
            Making complex technical and design decisions for ReactJS projects.
          </li>
          <li>
            Developing application codes and unit tests in ReactJS and REST Web
            Services.
          </li>
        </ul>
        <p className="mb-4 mt-10">- -Requirements</p>
        <ul className="list-disc list-inside text-sm text-gray-600 leading-7">
          <li>Designing and developing user interfaces using ReactJS.</li>
          <li>
            Consuming RESTful APIs to connect web applications to back-end
            services.
          </li>
          <li>
            Adapting interfaces for modern internet applications using the
            latest front-end technologies.
          </li>
          <li>
            Writing efficient, reusable, and scalable JavaScript, CSS, and HTML.
          </li>
          <li>
            Conducting product analysis tasks to identify and fix issues, and
            improve performance.
          </li>
          <li>
            Making complex technical and design decisions for ReactJS projects.
          </li>
          <li>
            Developing application codes and unit tests in ReactJS and REST Web
            Services.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
