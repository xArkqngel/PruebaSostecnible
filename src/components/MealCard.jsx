import Link from "next/link";
import './MealCard.css';

function MealCard({meal}){
    return (
        <div className='meal-card'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
        </div>
    );
}

export default MealCard;
            