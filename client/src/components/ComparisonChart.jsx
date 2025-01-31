import React, { useEffect, useRef } from "react";

function ComparisonChart({
  firstType,
  firstData,
  secondType,
  secondData,
  criteriaArray,
}) {
  const options = {
    xaxis: {
      show: true,
      categories: criteriaArray,
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
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return "₹" + value;
        },
      },
    },
    series: [
      {
        name: firstType,
        data: firstData,
        color: "#1A56DB",
      },
      {
        name: secondType,
        data: secondData,
        color: "#7E3BF2",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      height: "100%",
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
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
      <div class="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800">
        <div class="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
          <div>
            <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              Comparison
            </h5>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Weekly Data
            </p>
          </div>
        </div>
        <div ref={chartRef} className="border-b border-gray-200 dark:border-gray-700 px-2" ></div>
      </div>
    </div>
  );
}

export default ComparisonChart;
