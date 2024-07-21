"use client"
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
import AddJob from "./Form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";

export default function SelectCategories() {
  const router = useRouter()
   const jobTypeOptions = [
     { value: "fulltime", label: "Full Time" },
     { value: "parttime", label: "Part Time" },
     { value: "contract", label: "Contract" },
     { value: "freelance", label: "Freelance" },
     { value: "internship", label: "Internship" },
   ];

   const expectationsOptions = [
     { value: "apprenticeship", label: "Apprenticeship" },
     { value: "fulltime", label: "Full Time" },
     { value: "parttime", label: "Part Time" },
     { value: "contract", label: "Contract" },
     { value: "freelance", label: "Freelance" },
   ];

   const languageOptions = [
     { value: "english", label: "English" },
     { value: "hindi", label: "Hindi" },
     { value: "gujarati", label: "Gujarati" },
   ];
  const jobRoleOptions = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "Business Analyst", label: "Business Analyst" },
    { value: "Sales Executive", label: "Sales Executive" },
  ];


   const ageOptions = [];
   for (let i = 0; i <= 50; i++) {
     ageOptions.push({ value: i, label: `${i} years` });
   }

   const weeklyHoursOptions = [];
   for (let i = 0; i <= 50; i++) {
     weeklyHoursOptions.push({ value: i, label: `${i} hours` });
   }

   const [jobtitle, setJobTitle] = useState(null);
   const [jobtype, setJobType] = useState(null);
   const [languages, setLanguages] = useState([]);
   const [expectations, setExpectations] = useState(null);
   const [age, setAge] = useState(null);
   const [renumeration, setRenumeration] = useState(0);
   const [trainingRequired, setTrainingRequired] = useState(0);
   const [weeklyHours, setWeeklyHours] = useState(null);
   const [experience, setExperience] = useState(0);
   const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
       candidate: {
         jobtype: jobtype ? jobtype.value : null,
         job_title: [jobtitle ? jobtitle.value : null],
         languages: languages.map((lang) => lang.value),
         expectations: expectations ? expectations.value : null,
         age: age ? age.value : null,
         renumeration,
         training_required: trainingRequired,
         weekly_hours: weeklyHours ? weeklyHours.value : null,
         experience,
         location: [location],
       },
     };

    // Construct query parameters
     const queryParams = new URLSearchParams({
       candidate: JSON.stringify(data),
     }).toString();
      localStorage.setItem("candidate", JSON.stringify(data.candidate));
      Cookies.set("candidate", JSON.stringify(data.candidate));

    // Navigate to the talent search page with query parameters
    router.push(`/search/talent?${queryParams}`);
  };

  //  const handleSubmit = async (e) => {
  //    e.preventDefault();

  //    const data = {
  //      candidate: {
  //        name: "Alice Smith",
  //        jobtype: jobtype ? jobtype.value : null,
  //        job_title: [jobtitle ? jobtitle.value : null],
  //        languages: languages.map((lang) => lang.value),
  //        expectations: expectations ? expectations.value : null,
  //        age: age ? age.value : null,
  //        renumeration,
  //        training_required: trainingRequired,
  //        weekly_hours: weeklyHours ? weeklyHours.value : null,
  //        experience,
  //        location: [location],
  //      },
  //    };
  //    console.log(data)

  //    const requestOptions = {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify(data),
  //    };

  //    try {
  //      const response = await fetch(
  //        "http://localhost:5052/knn_perc",
  //        requestOptions
  //      );
  //      const result = await response.text();
  //      alert(result);
  //      router.push("/search/talent")
  //    } catch (error) {
  //      console.error(error);
  //    }
  //  };
 
  return (
    <div className="flex h-[90vh] w-full gap-32 overflow-hidden">
      <div className="bg-[#EBE8E4] relative hidden lg:flex flex-col items-start justify-start w-[70%] m-5 rounded-xl  text-black">
        <Image
          src={"/jdsideimg.svg"}
          alt="sideImg"
          width={2000}
          height={2000}
          className="absolute -right-28"
        />
      </div>

      <div className="w-full p-4 rounded h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-1">Enter role Details </h2>
        <h2 className="text-4xl font-bold mb-8">you are looking for.</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Job title:</label>
          <Select
            options={jobRoleOptions}
            value={jobtitle}
            onChange={setJobTitle}
            className="mb-4"
          />
          <label className="block mb-2">Job Type:</label>
          <Select
            options={jobTypeOptions}
            value={jobtype}
            onChange={setJobType}
            className="mb-4"
          />

          <label className="block mb-2">Languages:</label>
          <Select
            isMulti
            options={languageOptions}
            value={languages}
            onChange={setLanguages}
            className="mb-4"
          />

          <label className="block mb-2">Expectations:</label>
          <Select
            options={expectationsOptions}
            value={expectations}
            onChange={setExpectations}
            className="mb-4"
          />

          <label className="block mb-2">Age:</label>
          <Select
            options={ageOptions}
            value={age}
            onChange={setAge}
            className="mb-4"
          />

          <label className="block mb-2">Renumeration:</label>
          <input
            type="number"
            value={renumeration}
            onChange={(e) => setRenumeration(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="yes or no"
          />

          <label className="block mb-2">Training Required:</label>
          <input
            type="number"
            value={trainingRequired}
            onChange={(e) => setTrainingRequired(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="yes or no"
          />

          <label className="block mb-2">Weekly Hours:</label>
          <Select
            options={weeklyHoursOptions}
            value={weeklyHours}
            onChange={setWeeklyHours}
            className="mb-4"
          />

          <label className="block mb-2">Experience:</label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="ex. 2 years"
          />

          <label className="block mb-2">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="ex. Mumbai, Delhi"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
