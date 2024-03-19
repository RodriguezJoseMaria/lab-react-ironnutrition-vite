// Your code here
import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => {
    // Aqui es donde amazon llama al back para espiarnos
    setServings(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // nos aseguramos así que la página no se recarga
    const newFood = { name, image, calories, servings };
    // Aquí podemos enviar la comida a la base de datos (BACK ) SPOILER

    props.addNewFood(newFood); // OJO porque no añade el id. En MongoDB sí lo haría

    // Limpiemos el form
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h3>Add Food Entry</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={handleNameInput}
            name="name"
            type="text"
          />
        </div>
        <br />
        <div>
          <label htmlFor="image">Image</label>
          <input
            value={image}
            onChange={handleImageInput}
            name="image"
            type="text"
          />
        </div>
        <br />
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            value={calories}
            onChange={handleCaloriesInput}
            name="calories"
            type="number"
          />
        </div>
        <br />
        <div>
          <label htmlFor="servings">Servings</label>
          <input
            value={servings}
            onChange={handleServingsInput}
            name="servings"
            type="number"
          />
        </div>
        <br />
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddFoodForm;
