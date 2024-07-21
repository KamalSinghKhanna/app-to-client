"use client"
import React from "react";
import Select from "react-select";

const optionsAll = [{ value: "all", label: "All" }];

const optionsRoles = [{ value: "roles", label: "Roles" }];

const JobsHeader = () => {
  return (
    <div className=" rounded p-4 flex items-center justify-between mb-4">
      <div className="text-2xl font-bold">Jobs</div>
      <div className="flex items-center">
        <Select
          options={optionsAll}
          defaultValue={optionsAll[0]}
          className="mr-4 w-40"
        />
        <Select
          options={optionsRoles}
          defaultValue={optionsRoles[0]}
          className="mr-4 w-40"
        />
        <button className="text-blue-600">Reset</button>
        <button className="bg-blue-500 text-white rounded py-2 px-4 ml-4">
          + Create Job
        </button>
      </div>
    </div>
  );
};

export default JobsHeader;
