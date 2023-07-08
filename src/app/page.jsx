import React from 'react';
import './globals.css'
import MealCategories from '../components/categoriesNav';
import Navigation from '../components/navigation';
import Meals from '../components/meals';

async function getCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  return data;
}

async function getMeals() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await response.json();
  return data;
}


async function IndexPage() {
  const categories = await getCategories();
  const meals = await getMeals();
  return (
    <div className='container'>
      <MealCategories categories={categories.categories} />
      <div className='meals'>
      <Navigation/>
      <Meals meals = {meals.meals}/>
      </div>
    </div>
  );
}

export default IndexPage;