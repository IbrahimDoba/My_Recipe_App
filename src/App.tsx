import "./App.css";
import Navbar from "./Components/0Navbar/Navbar";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./Components/2DetailsPage/RecipeDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
