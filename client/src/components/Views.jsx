import React from "react";
import { userData } from "../data/dummyData";
import AreaChart from "../components/AreaChart";
import Table from "../components/Table";
import { weekDays } from "../data/dummyData";
import { weeklyViews } from "../data/dummyData";
import { dailyViews } from "../data/dummyData";
import { dayTimes } from "../data/dummyData";

function Views() {
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
      <div className="sm:col-span-8 sm:row-span-3 bg-gray-50 dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
      <Table type={"views"} timeFrame={"Weekly"} categoryArray={weekDays} dataArray={weeklyViews}/>
      </div>
      <div className="sm:col-span-4 sm:row-span-3 bg-gray-50 dark:bg-gray-800 row-span-4 col-span-6">
        <AreaChart
          categoryArray={weekDays}
          dataArray={weeklyViews}
          type={"Views"}
          timeFrame={"week"}
        />
      </div>

      <div className="sm:col-span-4 sm:row-span-3 bg-gray-50 dark:bg-gray-800 row-span-4 col-span-6">
        <AreaChart
          categoryArray={dayTimes}
          dataArray={dailyViews}
          type={"Views"}
          timeFrame={"day"}
        />
      </div>
      <div className="sm:col-span-8 sm:row-span-3 bg-gray-50 dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
      <Table type={"views"} timeFrame={"Daily"} categoryArray={weekDays} dataArray={dailyViews}/>
      </div>
    </div>
  );
}

export default Views;
