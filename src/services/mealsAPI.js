export async function getCategories() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    return data;
}

export async function getMealsByCategory(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data;
}

export async function getMealById(id) {
    const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => response.json());
    return meal.meals;
}

export async function getMealsByName(name) {
    const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((response) => response.json());
    return meals.meals;
}