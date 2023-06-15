import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/home/home";
import Landing from "./views/landing/landing";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
