import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

interface barProps {
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}

const BarCharComponent = (props: any) => {
  return <Bar options={props.options} data={props.data} />;
};

export default BarCharComponent;
