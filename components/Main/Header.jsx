"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Select from "react-select";

const dummyOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function Header({company}) {
  console.log(company)
  return (
    <header className="px-3 sm:px-6 py-2 bg-white border-b relative z-40">
      <div className="flex items-center justify-between">
        <Link href={"/search/talent"} className="ml-8 sm:ml-0 font-bold">
          {/* <span>Search Candidate</span>
          <span className="bg-green-800 px-2 py-0.5 rounded-xl text-white">
            234
          </span> */}
          <span>App2Build</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-16">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{company?.credits}</span>
            <Image
              src={"/credit.svg"}
              alt="profile"
              width={500}
              height={500}
              className="w-7 h-7 cursor-pointer"
            />
          </div>
          <Link href={"/company-profile"} className="flex items-center gap-3">
            <Image
              src={"/profile.svg"}
              alt="profile"
              width={500}
              height={500}
              className="w-7 h-7 sm:w-10 sm:h-10 cursor-pointer"
            />
            <span className="font-semibold hidden sm:block">
              {company.companyName}
            </span>
            <Image
              src={"/arrow-down.svg"}
              alt="profile"
              width={500}
              height={500}
              className="w-6 h-6 cursor-pointer hidden sm:block"
            />
          </Link>
        </div>
      </div>
      {/* <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center space-x-4">
          <div className="w-40">
            <Select options={dummyOptions} placeholder="Roles" />
          </div>
          <div className="w-60">
            <Select options={dummyOptions} placeholder="Number of Employees" />
          </div>
          <div className="w-40">
            <Select options={dummyOptions} placeholder="Experience" />
          </div>
          <div className="w-40">
            <Select options={dummyOptions} placeholder="Remote" />
          </div>
          
        </div>
      </div> */}
    </header>
  );
}
