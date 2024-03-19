import { useState } from "react";
import foodsJson from "../foods.json";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const { foods, setFoods } = props;
  const foodsFiltered = (searchInput) => {
    const filteredArray = foodsJson.filter((food) =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFoods(filteredArray);
  };

  return (
    <div>
      <div>
        <label>Search</label>
        <br />
        <input
          className="search-bar"
          type="text"
          onChange={(e) => {
            foodsFiltered(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
