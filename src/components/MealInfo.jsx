import './MealInfo.css'
import Link from 'next/link';

function MealInfo(mealInfo){
    const meal = mealInfo.meal
    return(
        <Link href={`/meal/${meal.idMeal}`}>
            <div className='info-container'>
                <div className='meal-info'>
                    <h1 className='meal-name'>{meal.strMeal}</h1>
                    <div className='meal-infocards'>
                        <h3 className='meal-category'>{meal.strCategory}</h3>
                        <h3 className='meal-area'>{meal.strArea}</h3>
                    </div>
                </div>
                <div className='meal-image'>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>
            </div>
        </Link>
    );
}

export default MealInfo;
