//localhost:5000/api/auth/company-profile/664ec807610822bee4accee6
"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function fetchUser() {
  const token = cookies().get("token")?.value;
  const email = cookies().get("email")?.value;
// const id = "664ec807610822bee4accee6";
//   if (token) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/company-profile/${email}`,
        { next: { tags: ["comapny"] } }
        // {
        //   headers: { "x-access-token": token },
        // }
      );
     const data = await response.json();
      console.log(data,"user")
      return data.company;
    } catch (error) {
      console.log(error);
    }
//   } else {
//     return false;
//   }
}


export async function fetchCandidate(id) {
  const uid = +id
  // console.log(uid, typeof(uid),"id")
  
 try {
   const response = await axios.post("http://localhost:5052/return_candidates", {
    uid,
   });
   
    console.log(response.data);
    return response.data
 } catch (error) {
   console.error("Error:", error);
 }
}