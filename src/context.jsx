import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [username, setUsername] = useState("");
  const baseURL = "https://catchword-back-prod.vercel.app";
  return (
    <AppContext.Provider
      value={{
        currentScore,
        setCurrentScore,
        setLeaderBoard,
        leaderBoard,
        username,
        baseURL,
        setUsername,
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
