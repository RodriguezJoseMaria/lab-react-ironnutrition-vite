// Your code here
function FoodBox(props) {
  const { food } = props;

  return (
    <div style={{ border: "solid" }}>
      <p>
        <b>{food.name}</b>
      </p>

      <img src={food.image} style={{ width: "25%" }} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button
        onClick={() => {
          props.deleteFood(food.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
