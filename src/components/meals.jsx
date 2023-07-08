"use client"
import React from "react";
import "./meals.css";

function Meals({meals}){
    return (
        <main className='meals'>
            <ul>
                {meals.slice(0, 12).map((meal) => (
                    <li key={meal.idMeal}>
                        <div className='meal'>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <div className='meal-info'>
                                <h3>{meal.strMeal}</h3>
                            </div>
                        </div>
                    </li>
                )
                )}
            </ul>
        </main>
    )
}

export default Meals;