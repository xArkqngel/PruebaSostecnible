import { getMealsByCategory } from "../../../services/mealsAPI";
import MealCard from "../../../components/MealCard";
import NavigationHeader from "../../../components/NavigationHeader";


async function CategoryPage({params}){
    const meals = await getMealsByCategory(params.category);
    return (
        <div className="meals-container">
            <NavigationHeader category={params.category}/>
            <h3 className="meals-subtitle">Lista de comidas</h3>
            <div className="meals-display-cards">
                {meals.meals.map(meal => (
                    <MealCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;