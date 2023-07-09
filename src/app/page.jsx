import React from 'react';
import './globals.css'
import CategoryPage from './category/[category]/page';

async function IndexPage() {
  return (
    <div className='container'>
      <div className='meals-container'>
        <CategoryPage params={{ category: 'Beef' }} />
      </div>
    </div>
  );
}

export default IndexPage;