import React from "react";
import { useState } from "react";
import ChartContext, { defaultChartContext } from "./chart-context";

type CtxProps = {
  children: React.ReactNode; //children prop type
};

const ChartContextProvider = (props: CtxProps) => {
  const [userFromDate, setUserFromDate] = useState(
    defaultChartContext.fromDate
  );
  const [userToDate, setUserToDate] = useState(defaultChartContext.toDate);
  const [userScale, setUserScale] = useState(defaultChartContext.scale);

  const [SENTUS, setSENTUS] = useState(defaultChartContext.sentus);
  const [POPUS, setPOPUS] = useState(defaultChartContext.popus);

  const [cpiusOptions, setCpiusOptions] = useState(
    defaultChartContext.cpiusOptions
  );
  const [cpiusData, setCpiusData] = useState(defaultChartContext.cpiusData);

  const [confusOptions, setConfusOptions] = useState(
    defaultChartContext.confusOptions
  );
  const [confusData, setConfusData] = useState(defaultChartContext.confusData);

  const [retausOptions, setRetausOptions] = useState(
    defaultChartContext.retausOptions
  );
  const [retausData, setRetausData] = useState(defaultChartContext.retausData);

  function sentusHandler(value: number) {
    // update SENTUS in context
    setSENTUS(value);
  }

  function popusHandler(value: number) {
    const format = Intl.NumberFormat("en-US");
    const local = format.format(value);
    // update POPUS in context
    setPOPUS(local);
  }

  function fromDateHandler(selectedDate: string) {
    // update from date in context
    setUserFromDate((prev) => {
      return selectedDate;
    });
  }

  function toDateHandler(selectedDate: string) {
    // update to date in context
    setUserToDate((prev) => {
      return selectedDate;
    });
  }

  function cpiusScaleHandler(scale: string) {
    // update CPIUS data for second plot
    setCpiusData((prev) => {
      let scaledData = prev.datasets[0].data.map(
        (item) => item * parseFloat(scale)
      );
      const updateData = {
        label: "Scaled",
        data: scaledData,
        backgroundColor: "rgb(74, 222, 128, 0.5)",
      };

      if (prev.datasets.length === 1) {
        return {
          ...prev,
          datasets: [...prev.datasets, updateData],
        };
      } else {
        return {
          ...prev,
          datasets: prev.datasets.map((item, index) => {
            if (index === 1) {
              return {
                ...item,
                ...updateData,
              };
            } else {
              return { ...item };
            }
          }),
        };
      }
    });
  }

  function confusScaleHandler(scale: string) {
    // update CONFUS data for second plot
    setConfusData((prev) => {
      let scaledData = prev.datasets[0].data.map(
        (item) => item * parseFloat(scale)
      );
      const updateData = {
        label: "Scaled",
        data: scaledData,
        backgroundColor: "rgb(74, 222, 128, 0.5)",
      };

      if (prev.datasets.length === 1) {
        return {
          ...prev,
          datasets: [...prev.datasets, updateData],
        };
      } else {
        return {
          ...prev,
          datasets: prev.datasets.map((item, index) => {
            if (index === 1) {
              return {
                ...item,
                ...updateData,
              };
            } else {
              return { ...item };
            }
          }),
        };
      }
    });
  }

  function cpiusDataHandler(data: any) {
    // update CPIUS data in context
    setCpiusData((prev) => {
      let state = {
        ...prev,
        labels: data.labels,
        datasets: [
          {
            ...prev.datasets[0],
            data: data.values,
          },
        ],
      };
      return state;
    });
  }

  function confusDataHandler(data: any) {
    // update CONFUS data in context
    setConfusData((prev) => {
      let state = {
        ...prev,
        labels: data.labels,
        datasets: [
          {
            ...prev.datasets[0],
            data: data.values,
          },
        ],
      };
      return state;
    });
  }

  function retausDataHandler(data: any) {
    // update RETAUS data in context
    setRetausData((prev) => {
      let state = {
        ...prev,
        labels: data.labels,
        datasets: [
          {
            ...prev.datasets[0],
            data: data.values,
          },
        ],
      };
      return state;
    });
  }

  // prepare all context
  const context = {
    sentus: SENTUS,
    popus: POPUS,
    fromDate: userFromDate,
    toDate: userToDate,
    scale: userScale,
    cpiusOptions: cpiusOptions,
    cpiusData: cpiusData,
    confusOptions: confusOptions,
    confusData: confusData,
    retausOptions: retausOptions,
    retausData: retausData,
    sentusHandler: sentusHandler,
    popusHandler: popusHandler,
    selectFromDate: fromDateHandler,
    selectToDate: toDateHandler,
    cpiusDataHandler: cpiusDataHandler,
    cpiusScaleHandler: cpiusScaleHandler,
    confusDataHandler: confusDataHandler,
    confusScaleHandler: confusScaleHandler,
    retausDataHandler: retausDataHandler,
  };

  return (
    <ChartContext.Provider value={context}>
      {props.children}
    </ChartContext.Provider>
  );
};

export default ChartContextProvider;
