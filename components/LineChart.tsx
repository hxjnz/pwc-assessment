import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface lineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

const LineChartComponent = (props: any) => {
  return <Line options={props.options} data={props.data} />;
};

export default LineChartComponent;
