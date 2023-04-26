import React from "react";
import ReactApexChart from "react-apexcharts";

const TotalUsersChart = () => {
  const series = [
    {
      name: "TEAM A",
      type: "column",
      data: [
        240, 250, 200, 200, 190, 224, 225, 223, 100, 240, 503, 124, 267, 175,
        114, 150, 304, 200, 150, 23, 45, 500, 55, 87, 23, 76, 99, 100, 222, 342,
        400,
      ],
    },
  ];

  const options = {
    colors: ["#0F60FF"],
    chart: {
      toolbar: {
        show: false,
      },
      height: null,
      pan: { enabled: false },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        endingShape: "flat",
        barHeight: "100%",
        dataLabels: {
          enabled: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    stroke: {
      show: false,
    },
    markers: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={100}
      width="100%"
    />
  );
};

export default TotalUsersChart;
