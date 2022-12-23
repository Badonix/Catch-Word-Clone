import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import NoPage from "./pages/NoPage";
import Result from "./pages/Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="play" element={<Game />} />
        <Route path="*" element={<NoPage />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
