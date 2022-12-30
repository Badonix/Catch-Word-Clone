import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider
      value={{
        currentScore,
        setCurrentScore,
        setLeaderBoard,
        leaderBoard,
        username,
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
