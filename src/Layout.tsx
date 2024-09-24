import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CryptoChart from "./components/CryptoChart";
import { useAppSelector } from "./store/hooks";

const Layout: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-white dark:bg-black ">
        <CryptoChart />
      </div>
    </>
  );
};

export default Layout;
