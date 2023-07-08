"use client"
import React from "react";
import { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";

export function useCategory() {
    const { category, setCategory } = useContext(CategoryContext);

    const categoryMeals= (meals) =>{
        return meals.filter((meal) => meal.idCategory === category.idCategory);
    }
    return { category, setCategory, categoryMeals };
}

