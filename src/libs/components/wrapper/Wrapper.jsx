"use client";
import { useState } from "react";
import { DataContext } from "./wraper_context";

const Wrapper = ({ children, data }) => {
  const [isData, setisData] = useState(data);
  return (
    <DataContext.Provider value={{ isData, setisData }}>
      {children}
    </DataContext.Provider>
  );
};

export default Wrapper;
