import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import NoPage from "./pages/NoPage";
import Result from "./pages/Result";
import LeaderBoard from "./pages/LeaderBoard";
import NewUser from "./pages/NewUser";
import { useEffect } from "react";
import axios from "axios";
export default function App() {
  const Track = async () => {
    try {
      const response = await axios.post(
        "https://tracker-back-flax.vercel.app/record",
        {
          apiKey: "HOrDPZxEF9fQlRycA5AdU2YOFbYpoNesvLYKTlKYvFg=",
        },
      );
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    try {
      Track();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="play" element={<Game />} />
        <Route path="*" element={<NoPage />} />
        <Route path="result" element={<Result />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="newuser" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}
