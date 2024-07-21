"use client";

import Image from "next/image";
import React from "react";
import Select from "react-select";

const dummyOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,

    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    background: "#fff",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      fontWeight: "bold"
    };
  },
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000", // Custom colour
  }),
  indicatorSeparator: (base) => ({ ...base, display: "none" }),
};
const Filter = () => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-col gap-4 justify-start items-start">
        <div className="flex items-center gap-2">
          <Image
            src={"/jobIcon.svg"}
            alt="job icon"
            width={500}
            height={500}
            className="w-5 h-5"
          />
          <div className="w-52">
            <Select
              styles={customStyles}
              className="text-black placeholder:text-black"
              options={dummyOptions}
              placeholder="Jobs"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/roleIcon.svg"}
            alt="job icon"
            width={500}
            height={500}
            className="w-6 h-6"
          />
          <div className="w-52">
            <Select
              styles={customStyles}
              className="text-black placeholder:text-black"
              options={dummyOptions}
              placeholder="Roles"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={"/employeIcon.svg"}
            alt="job icon"
            width={500}
            height={500}
            className="w-6 h-6"
          />
          <div className="w-52">
            <Select
              options={dummyOptions}
              styles={customStyles}
              placeholder="No of Employee"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={"/thumbIcon.svg"}
            alt="job icon"
            width={500}
            height={500}
            className="w-6 h-6"
          />
          <div className="w-52">
            <Select
              options={dummyOptions}
              styles={customStyles}
              placeholder="Experience"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/workTypeIcon.svg"}
            alt="job icon"
            width={500}
            height={500}
            className="w-5 h-5"
          />
          <div className="w-52">
            <Select
              options={dummyOptions}
              styles={customStyles}
              placeholder="Work Type"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={"/sallaryIcon.svg"}
            alt="job icon"
            width={500}
            height={500}
            className="w-5 h-5"
          />
          <div className="w-52">
            <Select
              options={dummyOptions}
              styles={customStyles}
              placeholder="Min. Base Salary"
            />
          </div>
        </div>
        <div className="w-56">
          <input
            type="text"
            placeholder="Enter amount"
            className="border border-gray-300 rounded-lg placeholder:text-gray-600 outline-none w-full h-full px-2 py-1.5"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
