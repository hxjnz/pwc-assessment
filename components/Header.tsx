import React, { useContext, useEffect, useState } from "react";
import {
  getConfus,
  getCpius,
  getPopus,
  getRetaus,
  getSentus,
} from "../lib/chart-util";
import ChartContext from "../store/chart-context";

// Contains Logo and datepicker
const HeaderComponent = () => {
  const chartCtx = useContext(ChartContext);
  const [fromDate, setFromDate] = useState(chartCtx.fromDate);
  const [toDate, setToDate] = useState(chartCtx.toDate);

  function fromDateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    // update both input and global context
    setFromDate(value);
  }

  function toDateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    // update both input and global context
    setToDate(value);
  }

  function cta() {
    // Due to blow user select any date
    // Append 1st in the payload
    const from: string = fromDate.concat("-01");
    const to: string = toDate.concat("-01");

    chartCtx.selectFromDate(fromDate);
    chartCtx.selectToDate(toDate);

    getSentus(from, to).then((value) => {
      chartCtx.sentusHandler(value);
    });
    getPopus(from, to).then((value) => {
      chartCtx.popusHandler(value);
    });
    getCpius(from, to).then((value) => {
      chartCtx.cpiusDataHandler(value);
    });
    getConfus(from, to).then((value) => {
      chartCtx.confusDataHandler(value);
    });
    getRetaus(from, to).then((value) => {
      chartCtx.retausDataHandler(value);
    });
  }

  // fetch default data
  useEffect(cta, []);

  return (
    <div className='relative bg-slate-50'>
      <div className='mx-auto px-4 sm:px-6'>
        <div className='flex max-md:flex-col items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <h1 className='text-3xl max-md:text-lg max-md:py-2 font-bold text-indigo-600'>
              Economic Dashboard
            </h1>
          </div>

          <div className='flex items-center justify-end md:flex md:flex-1 lg:w-0 gap-x-3.5'>
            <div>
              <label
                htmlFor='fromDate'
                className='block text-sm font-medium text-gray-700'
              >
                From
              </label>
              <input
                type='month'
                name='fromDate'
                id='fromDate'
                className='form-input rounded-lg border-gray-100'
                value={fromDate}
                onChange={fromDateHandler}
              />
            </div>
            <div>
              <label
                htmlFor='toDate'
                className='block text-sm font-medium text-gray-700'
              >
                To
              </label>
              <input
                type='month'
                name='toDate'
                id='toDate'
                className='form-input rounded-lg border-gray-100'
                value={toDate}
                onChange={toDateHandler}
              />
            </div>
            <button
              className='self-end rounded-lg border border-transparent bg-indigo-500 px-5 py-2 max-md:px-2 text-base max-md:text-sm font-medium text-white hover:bg-indigo-700'
              onClick={cta}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
