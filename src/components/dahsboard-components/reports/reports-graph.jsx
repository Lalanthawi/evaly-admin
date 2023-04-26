import ReactApexChart from "react-apexcharts";

export default function ReportsGraph() {
  const options = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
      pan: { enabled: false },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          fontSize: "13px",
          colors: "#AAA9B3",
          fontFamily: "'Inria Sans', sans-serif",
        },
      },
    },
    stroke: {
      width: 2.5,
      colors: ["#0F60FF"],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "13px",
          colors: "#AAA9B3",
          fontFamily: "'Inria Sans', sans-serif",
        },
        show: true,
        formatter: function (value) {
          return formatNumber(value);
        },
      },
    },
    grid: { show: false },
  };

  const series = [
    {
      name: "Data",
      data: [0, 60000, 25000, 70000, 40000, 50000],
    },
  ];

  const formatNumber = (value) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return value;
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={290}
    />
  );
}
