import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CodingPage from "./pages/codingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coding" element={<CodingPage />} />
      </Routes>
    </Router>
  )
}

export default App;
