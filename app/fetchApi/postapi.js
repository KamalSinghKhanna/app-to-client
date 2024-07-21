//localhost:5000/api/auth/company-profile/664ec807610822bee4accee6
"use server";

import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function reduceCredit(uid) {
  const token = cookies().get("token")?.value;
    const email = cookies().get("email")?.value;
    const candidateId = uid;
if (!token) {
  return { message: "Token not found" };
}
  revalidateTag("company");
    
 try {
   const response = await axios.post(
     `http://localhost:5000/api/auth/credits-reduce`,
     { email, candidateId }, // Send the email in the request body
    //  {
    //    headers: { "x-access-token": token },
    //  }
   );
   const data = response.data;
   console.log(data)
   return { message: data.message, credits: data.credits };
 } catch (error) {
   console.error(error);    
   return { message: "Error reducing credits", error };
 }
    
}

