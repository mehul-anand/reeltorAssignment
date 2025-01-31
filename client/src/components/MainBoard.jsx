import React from "react";
import ColChart from "./ColChart";
import { weeklySales } from "../data/dummyData";
import { weeklyViews } from "../data/dummyData";
import { weekDays } from "../data/dummyData";
import { userData } from "../data/dummyData";
import { dayTimes } from "../data/dummyData";
import { dailySales } from "../data/dummyData";
import { dailyViews } from "../data/dummyData";

function MainBoard() {
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
      <div className="sm:col-span-6 sm:row-span-3 bg-gray-50 h-28 dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
        <ColChart
          firstType={"Sales"}
          firstData={weeklySales}
          secondType={"Views"}
          secondData={weeklyViews}
          criteriaArray={weekDays}
          timeFrame={"weekly"}
        />
      </div>
      <div className="sm:col-span-6 sm:row-span-3 bg-gray-50 h-28 dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
        <ColChart
          firstType={"Sales"}
          firstData={dailySales}
          secondType={"Views"}
          secondData={dailyViews}
          criteriaArray={dayTimes}
          timeFrame={"daily"}
        />
      </div>
    </div>
  );
}

export default MainBoard;
