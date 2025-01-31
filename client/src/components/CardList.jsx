import React from "react";
import { pastBuyers } from "../data/dummyData";
function CardList() {
  return (
    <div>
      <div class="w-full max-w-md p-4 bg-white border border-gray-200 shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Past Buyers
          </h5>
        </div>
        <div class="flow-root">
            
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {pastBuyers.map((buyer,index)=>(<>
                <li key={index} class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={buyer.pfp}
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {buyer.name}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {buyer.mail}
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ₹{buyer.sale} Cr
                </div>
              </div>
            </li>
            </>))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardList;
