import "./App.css";
import { useState } from "react";
import FoodList from "./components/FoodList";
import SearchBar from "./components/SearchBar";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <SearchBar setFoods={setFoods} foods={foods} />
      <br />
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
