import Link from 'next/link';
import React from 'react'

const CandidateCard = ({candidate}) => {
  return (
    <div className="w-full max-w-80 sm:max-w-sm">
      <div className="rounded-lg border bg-white px-4 pt-3 pb-5 shadow-lg">
        <div className="relative mx-auto w-28 rounded-full">
          <span className="absolute flex items-center justify-center -right-3 -top-2 m-3 h-6 w-6 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2 text-white text-xs">{candidate.score}</span>
          <img
            className="mx-auto h-auto w-full rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {candidate.name}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
          {candidate.job_title[0]}
        </h3>
        <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
          {candidate.description}
        </p>
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <span>Experience</span>
            <span className="ml-auto">
              <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                {candidate.experience} years
              </span>
            </span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Location</span>
            <span className="ml-auto capitalize">{candidate.location[0]}</span>
          </li>
        </ul>

        <div className="flex w-full mt-5">
          <Link href={`/search/${candidate.uid}`} className="bg-black rounded-full w-full text-center px-3 py-1.5 text-white hover:bg-black/80">
            see more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard