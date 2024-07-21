import { fetchUser } from '@/app/fetchApi/fetchComapyProfile'
import CompanyProfile from '@/components/company/CompanyProfile'
import React from 'react'

const page = async() => {
  const company = await fetchUser();
 
  return (
    <>
    <CompanyProfile company={company} editable={true}/>
    </>
  )
}

export default page