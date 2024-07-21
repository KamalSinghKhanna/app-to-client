"use client";
import CandidateCard from "@/components/Main/CandidateCard";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Filter from "@/components/Main/Filter";
import Cookies from "js-cookie";
import Image from "next/image";

const Page = () => {
  const searchParams = useSearchParams();
  const candidateParams = searchParams.get("candidate");

  const [data, setData] = useState([]);
  const [candidate, setCandidate] = useState(null);

  // console.log(data, "hi");

  // Parse the candidateParams (stringified JSON) to an object
  useEffect(() => {
    
      const storedCandidate = localStorage.getItem("candidate");
      if (storedCandidate) {
        setCandidate(JSON.parse(storedCandidate));
      }
    
  }, [candidateParams]);

  useEffect(() => {
    const handleSubmit = async (candidate) => {
      if (!candidate) return;

      // Construct the data object based on candidate properties
      const data = {
        candidate,
      };

      // console.log("Request Data:", data);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(
          "http://localhost:5052/knn_perc",
          requestOptions
        );
        const result = await response.json();
        setData(Object.values(result));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (candidate) {
      handleSubmit(candidate);
    }
  }, [candidate]);

  return (
    <div className="w-full flex flex-col pt-4 px-4">
      <div className="flex items-center justify-between w-full mb-3">
        <div className="px-3 py-2 w-fit flex items-center gap-2 border rounded-lg">
          <span className="text-sm sm:text-base line-clamp-1">Search Candidate</span>
          <span className="bg-green-500 px-2 py-0.5 rounded-full text-xs sm:text-sm text-white">
           {data?.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#F1EFEC] hidden w-fit sm:flex items-center rounded-lg">
            <input
              type="text"
              placeholder="Search Candidate. . . "
              required
              className="p-2 h-10  w-full bg-transparent placeholder:text-gray-500 placeholder:text-sm focus:outline-none transition-colors duration-300"
            />
          </div>
          <button>
            <Image
              src={"/search.svg"}
              width={500}
              height={500}
              alt="email"
              className="w-9 h-9 sm:w-10 sm:h-10"
            />
          </button>
        </div>
      </div>
      <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-5 gap-5">
        {data?.map((item, i) => (
          <div key={i} className="w-full flex items-center justify-center">
            <CandidateCard candidate={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
