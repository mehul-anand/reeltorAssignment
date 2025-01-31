import React from "react";
import { motion } from "framer-motion";

function Card({ propertyInfo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
        <a href="#">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="rounded-t-lg w-full h-48 object-cover"
            src={propertyInfo.img}
            alt={propertyInfo.title}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <motion.h5
              whileHover={{ color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
              className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {propertyInfo.title}
            </motion.h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {propertyInfo.address}, {propertyInfo.city}
          </p>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
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
          </motion.a>
          <div className="my-3 font-normal text-gray-700 dark:text-gray-400">
            Specifications:
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="sm:flex sm:gap-6 mt-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src="../bed.png"
                  alt="Bedrooms"
                  className="w-5 h-5 dark:invert"
                />
                <p className="text-gray-900 dark:text-white">
                  {propertyInfo.bedroom}{" "}
                  {propertyInfo.bedroom > 1 ? "bedrooms" : "bedroom"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="../bath.png"
                  alt="Bathrooms"
                  className="w-4 h-4 dark:invert"
                />
                <p className="text-gray-900 dark:text-white">
                  {propertyInfo.bathroom}{" "}
                  {propertyInfo.bathroom > 1 ? "baths" : "bath"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="../../size.png"
                  alt="Size"
                  className="w-4 h-4 dark:invert"
                />
                <p className="text-gray-900 dark:text-white">
                  {propertyInfo.size} sqft
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;