import React, { useEffect, useRef } from "react";

function ColChart({
  firstType,
  firstData,
  secondType,
  secondData,
  criteriaArray,
  timeFrame,
}) {
  const firstObjArray = firstData.map((data, index) => ({
    x: criteriaArray[index],
    y: data,
  }));
  const secondObjArray = secondData.map((data, index) => ({
    x: criteriaArray[index],
    y: data,
  }));
  const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: firstType,
        color: "#1A56DB",
        data: firstObjArray,
      },
      {
        name: secondType,
        color: "#FDBA8C",
        data: secondObjArray,
      },
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, []);
  return (
    <div>
      <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-8">
        <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div>
              <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
                {firstType} v/s {secondType} ({timeFrame.toLowerCase()})
              </h5>
            </div>
          </div>
        </div>

        <div
          ref={chartRef}
          className="border-b border-gray-200 dark:border-gray-700"
        ></div>
      </div>
    </div>
  );
}

export default ColChart;
