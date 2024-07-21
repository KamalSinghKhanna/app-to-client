import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-10">
      {/* <div className="py-20 px-10 rounded shadow-lg w-full"> */}
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-5xl font-bold">Choose a Category</h1>
        <p className="text-center">
          Choose the role for which you want to hire.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Link href="categories/technical" className="w-fit h-80">
          <Image
            src={"/technicalrole.svg"}
            width={500}
            height={500}
            alt="email"
            className="w-full h-full"
          />
        </Link>
        <Link href="categories/non-technical" className="w-fit h-80">
          <Image
            src={"/nontechnicalrole.svg"}
            width={500}
            height={500}
            alt="email"
            className="w-full h-full"
          />
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Category