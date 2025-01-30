import React, { useEffect , useRef} from "react";

function AreaChart({categoryArray , dataArray , timeFrame ,type}) {
    const options = {
        chart: {
          height: "100%",
          maxWidth: "100%",
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
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0,
          },
        },
        series: [
          {
            name: "New users",
            data: dataArray,
            color: "#1A56DB",
          },
        ],
        xaxis: {
          categories: categoryArray,
          labels: {
            show: false,
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
      <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              {dataArray.reduce((acc,curr)=>(acc+curr),0)}
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {type} this {timeFrame}
            </p>
          </div>
        </div>
        <div ref={chartRef}></div>
      </div>
    </div>
  );
}

export default AreaChart;
