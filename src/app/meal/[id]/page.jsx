import { getMealById } from "../../../services/mealsAPI";
import NavigationHeader from "../../../components/NavigationHeader";

async function MealPage({params}){
    const meal = await getMealById(params.id);
    return (
        <div className="meal-container">
            <NavigationHeader category={meal[0].strCategory} />
            <h3 className="meals-subtitle">Detalles de comida</h3>
            <div className="meal-display">
                <img className="meal-image-card" src={meal[0].strMealThumb} alt={meal[0].strMeal} />
                <div className="meal-info">
                    <h1 className="meal-title">{meal[0].strMeal}</h1>
                    <div className="meal-infocards">
                        <h3 className='meal-category'>{meal[0].strCategory}</h3>
                        <h3 className='meal-area'>{meal[0].strArea}</h3>
                    </div>
                    <h2 className="meal-subtitle-ing">Instrucciones</h2>
                    <p className="meal-instructions">{meal[0].strInstructions.split('\n').map((line, index)=>(
                        <span key={index}><br/>{line}<br/></span>
                    ))}</p>
                    <h2 className="meal-subtitle-ing">Ingredientes</h2>
                    <div className="meal-ingredients-list">
                    <ul>
                        {Object.keys(meal[0]).map((key) => {
                        if (key.includes("strIngredient") && meal[0][key]) {
                            const ingredientNumber = key.replace("strIngredient", "");
                            const measureKey = `strMeasure${ingredientNumber}`;
                            return (
                            <li className="ingredients-li" key={ingredientNumber}>
                                {meal[0][key]} - <span className="meal-measure">{meal[0][measureKey]}</span>
                            </li>
                            );
                        }
                        return null;
                        })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealPage;