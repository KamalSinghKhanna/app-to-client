import React, { createContext, useContext, useState } from "react";

const InputDataContext = createContext();

export const InputDataProvider = ({ children }) => {
  const [inputData, setInputData] = useState({});

  return (
    <InputDataContext.Provider value={{ inputData, setInputData }}>
      {children}
    </InputDataContext.Provider>
  );
};

export const useInputData = () => useContext(InputDataContext);
