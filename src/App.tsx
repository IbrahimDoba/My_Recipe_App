import "./App.css";
import Navbar from "./Components/0Navbar/Navbar";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./Components/2DetailsPage/RecipeDetailPage";
import RecipieSection from "./Components/1DisplaySection/RecipeSection";
import { RecipeData } from "./Components/Services/Types";
import { useState } from "react";

function App() {
  const [Recipes, setRecipes] = useState<RecipeData[]>([]);
  const [loading, setIsLoading] = useState(false);

  return (
    <Router>
      <Navbar setRecipes={setRecipes} setIsLoading={setIsLoading} />
      <Routes>
        <Route
          path="/"
          element={<RecipieSection Recipes={Recipes} loading={loading} />}
        />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
