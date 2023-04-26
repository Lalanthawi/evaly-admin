import ReactApexChart from "react-apexcharts";

export default function AreaGraph({ color, gradient }) {
  const options = {
    chart: {
      type: "area",
      width: "100%",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      marker: {
        fillColors: [color],
      },
    },
    markers: {
      colors: color,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: [color],
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
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
            color: gradient,
            opacity: 1,
          },
          {
            offset: 100,
            color: gradient,
            opacity: 0.2,
          },
        ],
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={150}
      width="100%"
    />
  );
}
