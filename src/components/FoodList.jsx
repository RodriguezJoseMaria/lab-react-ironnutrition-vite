import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList(props) {
  const [foods, setFoods] = useState(foodsJson);
  const addNewFood = (newFood) => {
    // Create a new array
    const updatedFoods = [...foods, newFood]; // ESTO NO ES UN PUSH, es una copia del array anterior MAS la nueva película
    // const updatedMoviesData = [...moviesData, newMovie]

    setFoods(updatedFoods);

    // setMoviesData(updatedMoviesData)
  };
  const deleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => {
      return foodId !== food.id;
    });
    setFoods(updatedFoods);
  };
  return (
    <>
      <AddFoodForm addNewFood={addNewFood} />
      <h2>Food List</h2>
      {props.foods.map((food) => {
        return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
      })}
    </>
  );
}

export default FoodList;
