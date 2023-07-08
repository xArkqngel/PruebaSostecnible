import React from 'react';
import './globals.css'
import MealCategories from '../components/categories';
import Navigation from '../components/navigation';

async function getCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  return data;
}


async function IndexPage() {
  const categories = await getCategories();
  return (
    <div className='container'>
      <MealCategories categories={categories.categories} />
      <Navigation/>
    </div>
  );
}

export default IndexPage;