import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const series = [
    {
      name: "Series 1",
      data: [0, 10, 20, 40, 50, 40, 20],
    },
    {
      name: "Series 2",
      data: [25, 20, 30, 22, 45, 30, 0],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      pan: { enabled: false },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#0F60FF", "#0FB7FF"],
    },
    xaxis: {
      labels: {
        style: {
          fontSize: "10px",
          colors: "#AAA9B3",
          fontFamily: "'Inria Sans', sans-serif",
        },
      },
      categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      axisTicks: {
        show: false,
      },
    },
    markers: {
      colors: ["#0F60FF", "#0FB7FF"],
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    fill: {
      opacity: 0.8,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#F0F5FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#F0F5FF",
            opacity: 0.2,
          },
        ],
      },
    },
    tooltip: {
      marker: {
        show: true,
        fillColors: ["#0F60FF", "#0FB7FF"],
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={130}
      width="100%"
    />
  );
};

export default ApexChart;
