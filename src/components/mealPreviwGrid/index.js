import React, { useEffect, useState } from 'react';
import { SearchMealByName } from "../../services/mealtService.js";
import MealPreviw from '../mealPreview/index'
import { useSearch } from "../context/searchContext";
import './index.css';

const MealPreviwGrid = () => {

	const [meals, setMeals] = useState([]);
	const { search } = useSearch();

	useEffect(() => {
		if(search===''){
		async function Data(){
		const data = await SearchMealByName("b");
		setMeals(data);
	}
	Data()
}}, [search]);

	useEffect(()=>{
		if(search!==''){
		async function Data(){
		const data = await SearchMealByName(search);
		setMeals(data);	
	}
		Data()
}}, [search]);

	console.log(meals) 


	return (
		<div className='meal-grid'>
			{meals ? meals.map((meal) => (
				<MealPreviw meal={meal}/>
			)): <div>Cargando..</div>}
		</div>
	);
};

export default MealPreviwGrid;
