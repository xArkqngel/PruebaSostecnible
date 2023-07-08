"use client"
import React from 'react';
import './navigation.css'
import { useCategory } from '../hooks/useCategory';

function Navigation(){
    const { category, setCategory } = useCategory();

    const defaultCategory = 'Seafood';
    const handleChangeCategory = (e) => {
        setCategorry(prevState => ({
            ...prevState,
            idCategory: e.target.value
            }));
    }
        
    return(
        <section className='navigation'>
            <h1 className='selected-category'>Categoría Seleccionada:{category}</h1>
            <div className='search'>
                <input type='text' placeholder='Search meals'></input>
                <button className='search-button'>Search</button>
            </div>
        </section>
    );
}

export default Navigation;