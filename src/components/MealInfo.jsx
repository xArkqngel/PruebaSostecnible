function MealInfo(meal){
    return(
        <div className='meal-info'>
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <h3>{meal.strMeal}</h3>
        </div>
    );
}

export default MealInfo;
