import React from "react";
import AreaChart from "./AreaChart";
import Table from "./Table";
import { userData ,weekDays,weeklySales,dailySales,dayTimes} from "../data/dummyData";

function Sales() {
  return (
    <div className="p-4 mt-14 grid grid-cols-6 grid-rows-8 gap-4 sm:grid-cols-12 sm:grid-rows-13 bg-gray-50 dark:bg-gray-700">
      <div className="sm:col-span-12 sm:grid-rows-1 col-span-6">
        <p className="text-2xl text-gray-900 dark:text-white sm:pr-5 sm:pt-2">
          Hello {userData.name}!
        </p>
        <p className="text-gray-900 dark:text-white sm:pr-5 sm:pt-5">
          Here are your stats
        </p>
      </div>
      <div className="sm:col-span-4 sm:row-span-3 bg-gray-50 dark:bg-gray-800 row-span-4 col-span-6">
        <AreaChart
          categoryArray={weekDays}
          dataArray={weeklySales}
          type={"Sales"}
          timeFrame={"week"}
        />
      </div>
      <div className="sm:col-span-8 sm:row-span-3 bg-gray-50 className dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
        <Table type={"sales"} timeFrame={"Weekly"} categoryArray={weekDays} dataArray={weeklySales}/>
      </div>
      <div className="sm:col-span-8 sm:row-span-3 bg-gray-50 className dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
      <Table type={"sales"} timeFrame={"Daily"} categoryArray={dayTimes} dataArray={dailySales}/>
      </div>
      <div className="sm:col-span-4 sm:row-span-3 bg-gray-50 dark:bg-gray-800 row-span-4 col-span-6">
        <AreaChart
          categoryArray={dayTimes}
          dataArray={dailySales}
          type={"Sales"}
          timeFrame={"day"}
        />
      </div>
    </div>
  );
}

export default Sales;
