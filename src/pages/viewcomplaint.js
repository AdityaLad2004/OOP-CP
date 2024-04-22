import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Viewcomplaint = () => {
  const Searchbar = () => {
    return (
      <form class="z-10 max-w-md mx-auto w-[100vw] mt-4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    );
  };
  const Cards = ({ complainttitle, location, complaintDescription, name }) => {
    return (
      // <div className="absolute w-fit, h-fit">
      <div class="z-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/90 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {complainttitle}
          </h5>
        </a>
        <div className="flex gap-1">
          <FaUserAlt className="text-gray-400" />
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            {name} ,{" "}
          </p>
          <FaLocationDot className="text-gray-400" />
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            {location}
          </p>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {complaintDescription}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Check Status
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      // </div>
    );
  };
  const list = [
    {
      id: 1,
      name: "Nishant",
      department: "road",
      complainttitle: "fix road",
      complaintDescription: "Potholes causing accident",
      location: "katraj",
    },
    {
      id: 2,
      name: "Nishant",
      department: "road",
      complainttitle: "fix road",
      complaintDescription: "Potholes causing accident",
      location: "katraj",
    },
  ];
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] z-10">
      <Searchbar className="" />
      <div className="p-5 grid grid-flow-col gap-4 auto-cols-max">
        {list.map((element, key) => (
          <Link to={"/complaintdetail/" + element.id}>
            <Cards
              complainttitle={element.complainttitle}
              complaintDescription={element.complaintDescription}
              name={element.name}
              location={element.location}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Viewcomplaint;
