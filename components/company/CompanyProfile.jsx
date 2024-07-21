"use client"
import React, { useState } from "react";

const CompanyProfile = ({ company, editable }) => {
  const [editedCompany, setEditedCompany] = useState(company);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCompany({ ...editedCompany, [name]: value });
  };

  const handleSave = () => {
    // Call API to update company data with editedCompany
    console.log("Updated company data:", editedCompany);
    // You can add your API call here to update the company data
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-10">Company Profile</h2>
        <div className="border-b mb-4 pb-4">
          <h3 className="text-xl font-semibold">Basic details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">
                Name of your company
              </label>
              {editable ? (
                <input
                  type="text"
                  name="companyName"
                  value={editedCompany.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <input
                  type="text"
                  value={company.companyName}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              )}
            </div>
            <div>
              <label className="block text-gray-700">Company website</label>
              {editable ? (
                <input
                  type="text"
                  name="companyWebsite"
                  value={editedCompany.companyWebsite}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <input
                  type="text"
                  value={company.companyWebsite}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              )}
            </div>
            <div>
              <label className="block text-gray-700">Company location</label>
              {editable ? (
                <input
                  type="text"
                  name="companyLocation"
                  value={editedCompany.companyLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <input
                  type="text"
                  value={company.companyLocation}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        <div className="border-b mb-4 pb-4">
          <h3 className="text-xl font-semibold">Branding</h3>
          <div className="mt-4">
            <label className="block text-gray-700">Company logo</label>
            {editable ? (
              <input
                type="text"
                name="companyLogo"
                value={editedCompany.companyLogo}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            ) : (
              <img
                src={company.companyLogo}
                alt="Company logo"
                className="h-16"
              />
            )}
            <label className="block text-gray-700 mt-4">Cover Image</label>
            {editable ? (
              <input
                type="text"
                name="coverImage"
                value={editedCompany.coverImage}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            ) : (
              <img src={company.coverImage} alt="Cover" className="w-full" />
            )}
          </div>
        </div>

        <div className="border-b mb-4 pb-4">
          <h3 className="text-xl font-semibold">Social links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">Twitter</label>
              {editable ? (
                <input
                  type="text"
                  name="twitter"
                  value={editedCompany.twitter}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <input
                  type="text"
                  value={company.twitter}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              )}
            </div>
            <div>
              <label className="block text-gray-700">LinkedIn</label>
              {editable ? (
                <input
                  type="text"
                  name="linkedin"
                  value={editedCompany.linkedin}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <input
                  type="text"
                  value={company.linkedin}
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">About company</h3>
          {editable ? (
            <textarea
              name="about"
              value={editedCompany.about}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          ) : (
            <p className="mt-2 text-gray-700">{company.about}</p>
          )}
        </div>

        {editable && (
          <div className="flex justify-end mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;
