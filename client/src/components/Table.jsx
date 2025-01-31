import React from "react";

function Table({ type, timeFrame, categoryArray, dataArray }) {
  const indexArray = [0, 1, 2];
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-7 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {timeFrame} {type}
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Here's a tabular representation of your {timeFrame.toLowerCase()}{" "}
              {type}
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {timeFrame === "Weekly" ? "Day" : "Time"}
              </th>
              <th scope="col" className="px-6 py-3">
                {type}
              </th>
              <th scope="col" className="px-6 py-3">
                {timeFrame === "Weekly" ? "Day" : "Time"}
              </th>
              <th scope="col" className="px-6 py-3">
                {type}
              </th>
            </tr>
          </thead>
          <tbody>
            {indexArray.map((num) => (
                <tr key={num} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {categoryArray[num]}
                  </th>
                  <td className="px-6 py-4">{dataArray[num]}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {categoryArray[num + 3]}
                  </th>
                  <td className="px-6 py-4">{dataArray[num + 3]}</td>
                </tr>
            ))}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Monday
              </th>
              <td className="px-6 py-4">6500</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Thursday
              </th>
              <td className="px-6 py-4">6500</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tuesday
              </th>
              <td className="px-6 py-4">6418</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Friday
              </th>
              <td className="px-6 py-4">6356</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Wednesday
              </th>
              <td className="px-6 py-4">Black</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Saturday
              </th>
              <td className="px-6 py-4">6456</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
