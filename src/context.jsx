import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <AppContext.Provider
      value={{
        currentScore,
        setCurrentScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
