import React, { useState } from "react";
import { listData } from "../data/dummyData";
import Card from "../components/Card";

function Listings() {
  const [page, setPage] = useState(1);
  const prevFunc =()=>{
    if(page>1){
      setPage(page-1)
    }
  }

  const nextFunc = ()=>{
    if(page<(listData.length/9)){
      setPage(page+1)
    }
  }

  return (
    <div>
      <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-800">
        <div className="p-4 mt-14 grid grid-cols-6 grid-rows-8 gap-4 sm:grid-cols-12 sm:grid-rows-14 bg-gray-50 dark:bg-gray-700">
          {listData.length > 0 && (
            <>
              {listData.slice(page * 9 - 9, page * 9).map((propInfo) => (
                <>
                  <div className="sm:col-span-4 sm:row-span-4 bg-gray-50 dark:bg-gray-800 row-span-4 col-span-6">
                    <Card propertyInfo={propInfo} />
                  </div>
                </>
              ))}
            </>
          )}
          <div class="flex sm:row-span-2 sm:col-span-12">
            <a
              onClick={prevFunc}
              href="#"
              class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-3.5 h-3.5 me-2 rtl:rotate-180"
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
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
            <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{page}</a>
            <a
            onClick={nextFunc}
              href="#"
              class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        </div>
      </div>
    </div>
  );
}

export default Listings;
