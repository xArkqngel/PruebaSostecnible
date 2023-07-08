'use client';
import React from 'react';
import './categoriesNav.css';
import Link from 'next/link';
import { useState } from 'react';


function MealCategories({categories}){
    const [selectedCategory, setSelectedCategory] = useState(categories[0].strCategory);

    return (
        <section className='categories'>
            <h1 className='title'>TheMealDB</h1>
            <div className='rectangle'>
                    <div className='list'>
                        <h1 className='text-wrapper-title'>Categorías</h1>
                        <ul>
                            {categories.map((category) => {
                                return category.strCategory === selectedCategory ? (
                                    <li>
                                        <Link href={`/category/${category.strCategory}`}
                                            key={category.idCategory}
                                            onClick={() => {setSelectedCategory(category.strCategory)}}
                                            category={category.strCategory}>
                                                {category.strCategory}
                                        </Link>
                                    </li>
                                ) : (
                                    <li>
                                        <Link href={`/category/${category.strCategory}`}
                                            key={category.idCategory}
                                            onClick={() => {setSelectedCategory(category.strCategory)}}
                                            category={category.strCategory}>
                                                {category.strCategory}
                                        </Link>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                        
                    </div>
                </div>
        </section>    
    );
}

export default MealCategories;