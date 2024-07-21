import React, { useState } from "react";

export default function AddJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    experience: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log(form);
    alert("Job submitted successfully");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className=" rounded w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Add Job Description</h2>
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Experience
          </label>
          <input
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
            rows="8"
          />
        </div>
      </form>
    </div>
  );
}
