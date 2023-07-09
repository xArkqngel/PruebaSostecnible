import { getMealsByCategory } from "../../../services/mealsAPI";
import MealCard from "../../../components/MealCard";
import NavigationHeader from "../../../components/NavigationHeader";


async function CategoryPage({params}){
    const meals = await getMealsByCategory(params.category);
    return (
        <div>
            <NavigationHeader category={params.category}/>
            <div className="meals-display">
                {meals.meals.map(meal => (
                    <MealCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;