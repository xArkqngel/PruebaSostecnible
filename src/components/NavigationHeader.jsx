"use client"
import React from 'react';
import './NavigationHeader.css'
import Search from './Search';


function NavigationHeader({category}){

    return(
        <section className='navigation'>
            <h1 className='selected-category'>Categoría Seleccionada:{String(category).replaceAll('_',' ')}</h1>
            <div className='search'>
                <Search/>
            </div>
            <h2 className='meal-list'>Lista de comidas</h2>
        </section>
    );
}

export default NavigationHeader;