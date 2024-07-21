import Link from "next/link";
import React from "react";

const JobCard = () => {
  return (
    <div className="bg-gray-100 shadow-md rounded p-4 mb-4 flex">
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2">Frontend developer</h3>
        <p className="text-gray-600 mb-2">By Kamal Khanna · 2h ago</p>
        <div className="mb-2">
          <div className="flex items-center mb-1">
            <span className="material-icons text-gray-500 mr-2">work</span>
            <span>Fresher (Just out of college)</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="material-icons text-gray-500 mr-2">
              attach_money
            </span>
            <span>₹3.5L-8.5L</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-gray-500 mr-2">place</span>
            <span>Remote</span>
          </div>
        </div>
        <Link href={"company-jobs/123"} className="bg-gray-100 text-blue-600 rounded py-2 px-4">
          View Job Details
        </Link>
      </div>
      <div className="ml-4">
        <p className="text-gray-600">Applications</p>
        <div className="flex items-center">
          <div className="bg-orange-200 h-4 w-20 mr-2"></div>
          <div className="text-sm">15 Total applicant</div>
        </div>
        <div className="flex items-center mt-2">
          <div className="bg-purple-200 h-4 w-20 mr-2"></div>
          <div className="text-sm">6 with 70% plus score</div>
        </div>
        <div className="flex items-center mt-2">
          <div className="bg-gray-200 h-4 w-20 mr-2"></div>
          <div className="text-sm">3 contacted</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
