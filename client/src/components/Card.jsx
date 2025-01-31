import React from "react";

function Card({ propertyInfo }) {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={propertyInfo.img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {propertyInfo.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {propertyInfo.address} , {propertyInfo.city}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <div className="my-3 font-normal text-gray-700 dark:text-gray-400">
            Specifications:
            <div className="sm:flex sm:gap-6 mt-2">
              <div className="flex items-center gap-2">
                <img
                  src="../../public/bed.png"
                  alt=""
                  className="w-5 h-5 dark:invert"
                />
                <p className="text-gray-900 dark:text-white">
                  {propertyInfo.bedroom}{" "}
                  {propertyInfo.bedroom > 1 ? "bedrooms" : "bedroom"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="../../public/bath.png"
                  alt=""
                  className="w-4 h-4 dark:invert"
                />
                <p className="text-gray-900 dark:text-white">
                  {propertyInfo.bathroom}{" "}
                  {propertyInfo.bathroom > 1 ? "baths" : "bath"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="../../public/size.png"
                  alt=""
                  className="w-4 h-4 dark:invert"
                />
                <p className="text-gray-900 dark:text-white">
                  {propertyInfo.size} sqft
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
