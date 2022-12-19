import React, { useContext, useEffect, useState } from "react";
import ChartContext from "../store/chart-context";
import BarCharComponent from "./BarChart";

// Contains Bar Chart and Index Card
const LowerRowComponent = () => {
  const chartCtx = useContext(ChartContext);

  return (
    <div className='container py-6 grid max-lg:grid-cols-1 grid-cols-2 gap-6'>
      <div className='bg-white rounded-3xl p-4'>
        <BarCharComponent
          options={chartCtx.retausOptions}
          data={chartCtx.retausData}
        />
      </div>
      <div className='flex max-lg:flex-col  max-lg:py-4 flex-row justify-items-center items-center content-center bg-white rounded-3xl'>
        <div className='flex-1 max-lg:p-4'>
          <div
            className={`mb-2 text-5xl font-medium ${
              chartCtx.sentus === 0 ? "text-red-400" : "text-green-400"
            }`}
          >
            {chartCtx.sentus}
          </div>
          <div className='text-xs font-medium text-gray-400'>
            AVERAGE US SENTIMENT INDEX (SENTUS)
          </div>
        </div>
        <div className='flex-1 max-lg:p-4'>
          <div className='mb-2 text-5xl font-medium text-indigo-500'>
            {chartCtx.popus}
          </div>
          <div className='text-xs font-medium text-gray-400 break-words'>
            POPULATION GROWTH DURING THE SELECTED PERIOD (POPUS)
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerRowComponent;
