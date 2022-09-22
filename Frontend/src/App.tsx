import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SkillsList from "./pages/SkillsList";
import WilderDetails from "./pages/WilderDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wilders/:wilderId" element={<WilderDetails />} />
        <Route path="/skills" element={<SkillsList />} />
      </Routes>
    </div>
  );
}

export default App;