import React from "react";
import { weeklySales,weeklyViews,weekDays,userData,dayTimes,dailySales,dailyViews } from "../data/dummyData";
import ColChart from "./ColChart";
import ComparisonChart from "./ComparisonChart";
import PieChart from "./PieChart";
import CardList from "./CardList";

function MainBoard() {
  return (
    <div className="p-4 mt-14 grid grid-cols-6 grid-rows-8 gap-4 sm:grid-cols-12 sm:grid-rows-13 bg-gray-50 dark:bg-gray-700">
      {/* Row 1 */}
      <div className="sm:col-span-10 sm:row-span-1 col-span-6">
        <p className="text-2xl text-gray-900 dark:text-white sm:pr-5 sm:pt-2">
          Hello {userData.name}!
        </p>
        <p className="text-gray-900 dark:text-white sm:pr-5 sm:pt-5">
          Here are your stats
        </p>
      </div>
      <div className=" sm:col-span-4 sm:row-span-8 bg-gray-50 dark:bg-gray-800 row-span-2 col-span-6">
        <PieChart />
        <CardList/>
      </div>
      {/* Row 2 */}
      <div className="sm:col-span-4 sm:row-span-4 bg-gray-50 dark:bg-gray-800 row-span-2 col-span-6">
        <ColChart
          firstType={"Sales"}
          firstData={weeklySales}
          secondType={"Views"}
          secondData={weeklyViews}
          criteriaArray={weekDays}
          timeFrame={"weekly"}
        />
      </div>
      <div className="sm:col-span-4 sm:row-span-4 bg-gray-50 dark:bg-gray-800 row-span-2 col-span-6">
        <ColChart
          firstType={"Sales"}
          firstData={dailySales}
          secondType={"Views"}
          secondData={dailyViews}
          criteriaArray={dayTimes}
          timeFrame={"daily"}
        />
      </div>
      {/* Row 3 */}
      <div className="sm:col-span-8 sm:row-span-4 bg-gray-50 dark:bg-gray-800 row-span-2 col-span-6 hidden sm:block">
        <ComparisonChart
          firstType={"Sales"}
          firstData={weeklySales}
          secondType={"Views"}
          secondData={weeklyViews}
          criteriaArray={weekDays}
        />
      </div>
    </div>
  );
}

export default MainBoard;
