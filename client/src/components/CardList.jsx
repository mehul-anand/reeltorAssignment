import React from "react";
import { pastBuyers } from "../data/dummyData";
function CardList() {
  return (
    <div>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Past Buyers
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {pastBuyers.map((buyer, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={buyer.pfp}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {buyer.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {buyer.mail}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹{buyer.sale} Cr
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardList;
