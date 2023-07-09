'use client'

import './Search.css'
import {getMealsByName} from '../services/mealsAPI'
import {useState, useRef, useEffect} from 'react'
import MealInfo from './MealInfo'

function Search(){
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])
    const [showMeals, setShowMeals] = useState(false)

    const inputRef = useRef()

    useEffect(()=>{
        if(search){
            setShowMeals(true)
        }else{
            setShowMeals(false)
        }
    },[meals, showMeals])

    const handleSearch = async (e) =>{
        setSearch(e.target.value);
        if (inputRef.current){
            clearTimeout(inputRef.current)
        }
        inputRef.current = setTimeout(async ()=>{
            setMeals(e.target.value ? await getMealsByName(e.target.value) : null)
        }, 500);
    }

    return(
        <form className='search-form'>
            <input className='search-bar' type='text' placeholder='Buscar' value={search} onChange={handleSearch}/>
            {showMeals
            ? <div className='search-results'>
                <ul className='meals-search-list'>
                    {meals ? meals.map((meal)=>(
                        <li className='meal-search-card' key={meal.idMeal}>
                            <MealInfo meal={meal}/>
                        </li>
                    )) : <p>404</p>}
                </ul>
            </div>
            : <></>}
        </form>
    );
}

export default Search;