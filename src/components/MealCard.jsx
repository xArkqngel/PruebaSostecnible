import Link from "next/link";
import './MealCard.css';

function MealCard({meal}){
    return (
        <Link href={`/meal/${meal.idMeal}`}>
            <div className='meal-card'>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strMeal}</p>
            </div>
        </Link>
    );
}

export default MealCard;
            