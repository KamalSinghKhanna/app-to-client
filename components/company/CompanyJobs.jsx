import React from "react";
import JobsHeader from "./JobsHeader";
import JobCard from "./JobCard";

const CompanyJobs = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <JobsHeader />
      <div className="container mx-auto">
        <JobCard />
      </div>
    </div>
  );
};

export default CompanyJobs;
