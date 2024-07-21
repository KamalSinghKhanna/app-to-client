import { fetchCandidate } from '@/app/fetchApi/fetchComapyProfile'
import CandidateProfile from '@/components/Main/CandidateProfile'
import ProfileModel from '@/components/Main/ProfileModel'
import React from 'react'

const page = async(params) => {

  const candidate = await fetchCandidate(params.params.userId);
  console.log(candidate,"front")


 const getRelevantDetails = (candidate) => {
   if (!candidate) return {};

   const details = {
     name: candidate.name,
     age: candidate.age,
     experience: candidate.experience,
     remuneration: candidate.renumeration,
     weekly_hours: candidate.weekly_hours,
     job_titles: [],
     languages: [],
     locations: [],
     employment_types: [],
     additional_info: [],
   };

   Object.entries(candidate).forEach(([key, value]) => {
     if (value === 1) {
       if (
         [
           "Software Engineer",
           "Business Analyst",
           "Sales Executive",
           "Project Manager",
           "Data Scientist",
           "Other",
         ].includes(key)
       ) {
         details.job_titles.push(key);
       } else if (
         [
           "english",
           "hindi",
           "french",
           "gujarati",
           "kannada",
           "marathi",
           "spanish",
           "tamil",
           "urdu",
         ].includes(key)
       ) {
         details.languages.push(key);
       } else if (
         [
           "mumbai",
           "bangalore",
           "delhi",
           "pune",
           "hyderabad",
           "chennai",
         ].includes(key)
       ) {
         details.locations.push(key);
       } else if (
         [
           "fulltime",
           "parttime",
           "contract",
           "temporary",
           "other_employment_type",
         ].includes(key)
       ) {
         details.employment_types.push(key);
       } else {
         details.additional_info.push(key);
       }
     }
   });

   return details;
 };
  const candidateDetails = getRelevantDetails(candidate);
  console.log(candidateDetails)
  return (
    <div className='relative'>
        {/* <CandidateProfile /> */}
        <ProfileModel candidateDetails={candidateDetails} uid={params.params.userId} />
    </div>
  )
}

export default page