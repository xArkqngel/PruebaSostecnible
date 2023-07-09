'use client';
import React from 'react';
import './CategoriesNav.css';
import Link from 'next/link';
import { useState } from 'react';


function CategoriesNav({categories}){
    const categoriesArray = Object.values(categories);
    const [selectedCategory, setSelectedCategory] = useState(categoriesArray[0].strCategory);


    return (
        <section className='categories'>
            <h1 className='title'>TheMealDB</h1>
                <div className='rectangle'>
                    <div className='categories-list'>
                        <h1 className='text-wrapper-title'>Categorías</h1>
                        <ul>
                            {categories.map((category) => {
                                return category.strCategory === selectedCategory ? (
                                    <li key={category.idCategory}>
                                        <Link href={`/category/${category.strCategory}`}
                                            onClick={() => {setSelectedCategory(category.strCategory)}}
                                            category={category.strCategory}>
                                                {category.strCategory}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={category.idCategory}>
                                        <Link href={`/category/${category.strCategory}`}
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

export default CategoriesNav;