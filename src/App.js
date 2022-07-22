import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
