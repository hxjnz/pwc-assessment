import React from "react";

import type { ChartData, ChartOptions } from "chart.js";

interface ChartContextInterface {
  sentus: number;
  popus: string;
  fromDate: string;
  toDate: string;
  scale: string;
  cpiusOptions: ChartOptions;
  cpiusData: ChartData;
  confusOptions: ChartOptions;
  confusData: ChartData;
  retausOptions: ChartOptions;
  retausData: ChartData;
  sentusHandler: (value: number) => any;
  popusHandler: (value: number) => any;
  selectFromDate: (selectedDate: string) => void;
  selectToDate: (selectedDate: string) => void;
  cpiusDataHandler: (data: any) => any;
  cpiusScaleHandler: (scale: any) => any;
  confusDataHandler: (data: any) => any;
  confusScaleHandler: (scale: any) => any;
  retausDataHandler: (data: any) => any;
}

export const defaultChartContext = {
  sentus: 0,
  popus: "0",
  fromDate: "2015-01",
  toDate: "2021-01",
  scale: "1.5",
  cpiusOptions: {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "CPIUS - United States - Consumer price index",
      },
    },
  },
  cpiusData: {
    labels: [],
    datasets: [
      {
        label: "CPIUS",
        data: [],
        backgroundColor: "rgb(99, 102, 241, 0.5)",
      },
    ],
  },
  confusOptions: {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "CONFUS - United States - Consumer confidence index",
      },
    },
  },
  confusData: {
    labels: [],
    datasets: [
      {
        label: "CONFUS",
        data: [],
        backgroundColor: "rgb(99, 102, 241, 0.5)",
      },
    ],
  },
  retausOptions: {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "RETAUS - United States - Retail trade",
      },
    },
  },
  retausData: {
    labels: [],
    datasets: [
      {
        label: "RETAUS",
        data: [],
        backgroundColor: "rgb(99, 102, 241, 0.5)",
      },
    ],
  },
  sentusHandler: (value: number) => {},
  popusHandler: (value: number) => {},
  selectFromDate: (selectedDate: string) => {},
  selectToDate: (selectedDate: string) => {},
  cpiusDataHandler: (data: Object) => Object,
  cpiusScaleHandler: (scale: string) => {},
  confusDataHandler: (data: Object) => Object,
  confusScaleHandler: (scale: string) => {},
  retausDataHandler: (data: Object) => Object,
};

const ChartContext =
  React.createContext<ChartContextInterface>(defaultChartContext);

export default ChartContext;
