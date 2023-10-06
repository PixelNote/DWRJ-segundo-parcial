import React from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const MealPreviw = ({ meal }) => {

	return (
		<div className='meal-previw'>
			<Link to={`/meal/${meal.idMeal}`}>
				<img src={meal.strMealThumb} alt={meal.strMeal} />
			</Link>
		</div>
	);
};

export default MealPreviw;
