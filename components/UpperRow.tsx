import React, { useContext, useState } from "react";
import LineChartComponent from "./LineChart";
import ChartContext from "../store/chart-context";

// Contains range input with two Line Charts
const UpperRowComponent = () => {
  const chartCtx = useContext(ChartContext);
  const [rangeValue, setRangeValue] = useState("1.5");

  function rangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setRangeValue(value);
  }

  function scaleHandler(e: any) {
    const value = e.target.value;
    chartCtx.cpiusScaleHandler(value);
    chartCtx.confusScaleHandler(value);
  }

  return (
    <div className='container py-4 flex flex-col'>
      <div className='w-64 items-center self-end py-4'>
        <label
          htmlFor='scale-range'
          className='block mb-2 text-sm font-medium text-gray-900 '
        >
          Scale:
          <span className='px-1'>{rangeValue}</span>
        </label>
        <input
          id='scale-range'
          type='range'
          min='1'
          max='2'
          step='0.1'
          value={rangeValue}
          onChange={rangeHandler}
          onMouseUp={scaleHandler}
          className='w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer'
        />
        <div className='float-left'>
          <p>1</p>
        </div>
        <div className='float-right'>
          <p>2</p>
        </div>
      </div>
      <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-6 sm:auto-cols-auto'>
        <div className='bg-white rounded-3xl p-4'>
          <LineChartComponent
            options={chartCtx.cpiusOptions}
            data={chartCtx.cpiusData}
          />
        </div>
        <div className='bg-white rounded-3xl p-4'>
          <LineChartComponent
            options={chartCtx.confusOptions}
            data={chartCtx.confusData}
          />
        </div>
      </div>
    </div>
  );
};

export default UpperRowComponent;
