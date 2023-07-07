import React from 'react';
import Styles from './categories.css';

function MealCategories({categories}){
    return (
        <div className='categories'>
            <h1 className='title'>TheMealDB</h1>
            <div className='rectangle'>
                    <div className='list'>
                        <a className='text-wrapper-title'>Categorías</a>
                        <br></br>
                        <a className='text-wrapper-title'>____________</a>
                        {categories.map((category) => (
                            <div key={category.idCategory}>
                                <a className='text-wrapper'>
                                    {category.strCategory}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
        </div>    
    );
}

export default MealCategories;