import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/home/home";
import Landing from "./views/landing/landing";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";
import About from "./views/about/about";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
