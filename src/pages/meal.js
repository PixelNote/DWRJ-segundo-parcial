import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMealById } from "../services/mealtService";
import '../App.css'

export default function Meal() {

  const { id } = useParams();
  const [meal, setMeal] = useState(null)

  useEffect(() => {
    async function Data() {
      const data = await FetchMealById(id);
      setMeal(data);
    }
    Data();
  }, [id]);

  return (
    <div>
      {meal && (
        <div className="meal-detail-container">
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal}></img>
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );


}
