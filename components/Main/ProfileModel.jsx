"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { reduceCredit } from "@/app/fetchApi/postapi";
import toast, {Toaster} from "react-hot-toast";
import Image from "next/image";
const ProfileModel = ({candidateDetails, uid}) => {
  console.log(candidateDetails)
  const [isCreditSpent, setIsCreditSpent] = useState(false);

  const [message, setMessage] = useState("");
  // const [credits, setCredits] = useState(null);
    const router = useRouter()
  // const skills = [
  //   "Desktop Applications",
  //   "Convert to an Editable File",
  //   "Chatbot Development",
  //   "Software developer",
  //   "Python developer",
  //   "Data analyst",
  //   "Convert files expert",
  //   "PDF conversion expert",
  //   "PDF to Excel converter",
  //   "Data entry expert",
  //   "Selenium automation expert",
  //   "Business automation expert",
  //   "Telegram bot expert",
  //   "Trading bot expert",
  //   "Data conversion expert",
  //   "pandas developer",
  //   "API integration expert",
  //   "NFT marketplace developer",
  //   "Python automation expert",
  //   "Data scraper",
  //   "Web scraper",
  // ];




  const handleReduceCredits = async () => {
    if (isCreditSpent) {
      // If credit already spent, no need to spend again
      return;
    }

    try {
      // Make a request to the backend to check if credits can be reduced
      const result = await reduceCredit(uid); // Pass candidate ID to backend
      if (result.message === "Credit reduced by 1") {
        // If credit reduction successful
        setIsCreditSpent(true);
      }
      else if (result.message === "Credits already spent on this candidate") {
        // If credit reduction successful
        setIsCreditSpent(true);
      }
      setMessage(result.message);
      toast(`${result.message}!`, {
        icon: "👏",
      });
      // alert(result.message);
    } catch (error) {
      console.error(error);
      setMessage("Error reducing credits");
      toast.error("Error reducing credits");
    }
  };

  return (
    // <div className="fixed w-full h-screen inset-0  bg-black/70 flex items-center justify-center z-50">
    //   <div className="relative bg-transparent  rounded-xl"></div>
    //   <div
    //     onClick={router.back}
    //     className="w-6 h-6 flex items-center justify-center absolute rounded-full right-2 top-2 bg-black cursor-pointer text-white"
    //   >
    //    X
    //   </div>
    //   <div className=" mx-auto bg-white shadow-lg mt-20 rounded-lg h-full overflow-y-scroll p-6 flex flex-col md:flex-row">
    //     <div className="flex-1">
    //       <div className="flex items-center space-x-4">
    //         <img
    //           className="w-32 h-32 rounded-full"
    //           src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/0ef344c1a1a5426ce9e9a0d107acd7ea-1531958700619/a2732f7c-3970-44ed-aa83-315f02429e95.jpg"
    //           alt="Profile"
    //         />
    //         <div>
    //           <h1 className="text-2xl font-bold">Dmytro P</h1>
    //           <p className="text-gray-600">@dmytroproh</p>
    //           <div className="flex items-center mt-2">
    //             <span className="text-yellow-400">
    //               <i className="fas fa-star"></i>
    //             </span>
    //             <span className="ml-1 text-gray-600">5.0 (1.0k)</span>
    //             <span className="ml-2 text-yellow-500">Top Rated</span>
    //           </div>
    //           <p className="text-gray-600 mt-2">Software developer</p>
    //           <p className="text-gray-600">
    //             Ukraine <span className="mx-1">•</span> English, Ukrainian
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <h2 className="text-lg font-semibold">About me</h2>
    //         <p className="text-gray-700 mt-2">
    //           Hello! I'm Dmytro, python PRO from Kyiv, Ukraine. I'm ready to
    //           provide you with high quality services. I'll be happy to resolve
    //           problems of your business and add some python magic to your life.
    //           Let's work together!
    //         </p>
    //       </div>
    //       <div className="mt-4">
    //         <h2 className="text-lg font-semibold">Skills</h2>
    //         <div className="flex flex-wrap mt-2">
    //           {skills.map((skill) => (
    //             <span
    //               key={skill}
    //               className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mt-2 px-2.5 py-0.5 rounded"
    //             >
    //               {skill}
    //             </span>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <h2 className="text-lg font-semibold">Education</h2>
    //         <div className="flex items-center mt-2">
    //           <i className="fas fa-university text-gray-500 mr-2"></i>
    //           <div>
    //             <p className="text-gray-700">
    //               National Technical University of Ukraine "Kyiv Polytechnic
    //               Institute"
    //             </p>
    //             <p className="text-gray-500 text-sm">
    //               M.A. Degree. Information Systems
    //             </p>
    //             <p className="text-gray-500 text-sm">Graduated 2016</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mt-4 pb-20">
    //         <h2 className="text-lg font-semibold">Certifications</h2>
    //         <div className="flex items-center mt-2">
    //           <i className="fas fa-certificate text-gray-500 mr-2"></i>
    //           <div>
    //             <p className="text-gray-700">
    //               CyberBionic Systematics JavaScript Advanced
    //             </p>
    //             <p className="text-gray-500 text-sm">Graduated 2015</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full md:w-64 bg-gray-100 p-4 rounded-lg md:ml-6 flex-shrink-0 mt-6 md:mt-0">
    //       <h2 className="text-lg font-semibold">Dmytro P</h2>
    //       <p className="text-gray-600 mt-1">On Fiverr since Jul 2018</p>
    //       <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
    //         Contact me
    //       </button>
    //       <p className="text-gray-600 mt-2 text-sm">I speak</p>
    //       <p className="text-gray-600 mt-1">
    //         English <span className="text-gray-500">Conversational</span>
    //       </p>
    //       <p className="text-gray-600 mt-1">
    //         Ukrainian <span className="text-gray-500">Native/Bilingual</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="absolute w-full h-screen inset-0 bg-black/70 z-30">
        <div className="relative bg-transparent rounded-xl"></div>

        <div className="w-[91%] mx-auto mt-11 bg-white shadow-lg rounded-xl h-[80vh] overflow-y-scroll p-6 flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="flex items-start space-x-5 sm:space-x-4">
              <img
                className="w-32 h-32 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="Profile"
              />
              <div>
                <h1 className="text-xl font-bold">{candidateDetails.name}</h1>
                <p className="text-gray-600">@{candidateDetails.name}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-1 text-gray-600">5.0 (1.0k)</span>
                  <span className="ml-2 text-yellow-500">Top Rated</span>
                </div>
                {candidateDetails.job_titles.map((title, index) => (
                  <span key={index} className="text-gray-600">
                    {title}
                  </span>
                ))}
                <br />
                <div className="flex gap-2">
                  {candidateDetails.locations.map((title, index) => (
                    <page key={index} className="text-gray-600">
                      {title}
                      {index === 0 ? "," : ""}
                    </page>
                  ))}
                </div>
              </div>
              <div
                onClick={() => window.history.back()}
                className=" w-full lg:hidden flex justify-end rounded-full text-xl font-medium cursor-pointer text-black"
              >
                <Image
                  src={"/cancel.svg"}
                  alt="cancel"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">About me</h2>
              <p className="text-gray-700 mt-2">
                Hello! I'm Dmytro, python PRO from Kyiv, Ukraine. I'm ready to
                provide you with a high quality services. I'll be happy to
                resolve problems of your business and add some python magic to
                your life. Let's work together!
              </p>
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
                <span className="text-gray-600 text-sm font-medium mt-2">
                  +13
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Employment Types</h2>
              <div className="flex flex-wrap mt-2">
                {candidateDetails.employment_types.map((type, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mt-2 px-2.5 py-0.5 rounded"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 pb-20">
              <h2 className="text-lg font-semibold">Additional Information</h2>
              <div className="flex flex-wrap mt-2">
                {candidateDetails.additional_info.map((info, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mt-2 px-2.5 py-0.5 rounded"
                  >
                    {info}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div
              onClick={() => window.history.back()}
              className="w-full hidden lg:flex justify-end rounded-full text-xl font-medium cursor-pointer text-black"
            >
              <Image
                src={"/cancel.svg"}
                alt="cancel"
                width={200}
                height={200}
                className="w-6 h-6"
              />
            </div>
            <div className="w-full md:w-80 h-full bg-gray-100 p-8 rounded-2xl md:ml-6 flex-shrink-0 mt-6 md:mt-0">
              <h2 className="text-lg font-semibold">{candidateDetails.name}</h2>
              <p className="text-gray-600 mt-1 text-sm">
                On App2Build since June 2024
              </p>

              <div className="text-gray-600 flex flex-wrap items-center gap-2 mt-3 text-sm">
                <p className="text-gray-600 text-sm">I speak</p>
                {candidateDetails.languages.map((language, index) => (
                  <p key={index}>
                    {language}
                    <span className="text-gray-500 text"> -Conversational</span>
                  </p>
                ))}
              </div>
              <button
                onClick={handleReduceCredits}
                className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 w-full"
              >
                Contact me
              </button>
              {isCreditSpent && (
                <div className="bg-green-300 rounded px-2 py-5 shadow mt-5">
                  <span>secret info about candidate</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ProfileModel;
