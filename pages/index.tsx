import type { NextPage } from "next";

import HeaderComponent from "../components/Header";
import LowerRowComponent from "../components/LowerRow";
import UpperRowComponent from "../components/UpperRow";
import ChartContextProvider from "../store/chart-context-provider";

const Home: NextPage = () => {
  return (
    <ChartContextProvider>
      <div className='container mx-auto bg-cover bg-slate-50 px-4'>
        <HeaderComponent />
        <div className='flex flex-col gap-y-2 items-center justify-center text-center bg-slate-50'>
          <UpperRowComponent />
          <LowerRowComponent />
        </div>
      </div>
    </ChartContextProvider>
  );
};

export default Home;
