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
      categories: ["12am", "4am", "8am", "12pm", "4pm", "8pm", "11pm"],
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
        show: false,
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

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={244}
      width="100%"
    />
  );
}
