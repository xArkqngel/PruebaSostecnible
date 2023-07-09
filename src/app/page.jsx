import React from 'react';
import './globals.css'
import CategoriesNav from '../components/CategoriesNav';
import {getCategories} from '../services/mealsAPI';
import CategoryPage from '../category/[category]/page';

async function IndexPage() {
  const categories = await getCategories();
  return (
    <div className='container'>
      <div className='nav-container'>
      <CategoriesNav categories={categories.categories} />
      </div>
      <div className='meals-container'>
        <CategoryPage params={{ category: 'Beef' }} />
      </div>
    </div>
  );
}

export default IndexPage;